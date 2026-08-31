import type { DepositAccount } from "../..";
import { BASE_PATH, TOKEN, buildAccountsApi, sleep } from "./api";

/**
 * Funds a sandbox deposit account so balance-dependent operations (fees, holds,
 * outbound payments) succeed instead of failing with `InsufficientFunds`.
 *
 * Unit's sandbox exposes a one-shot ATM deposit simulation that credits an
 * account immediately (firing a Transaction Created event). It isn't part of
 * the generated SDK, so we call it with raw fetch. Unlike ACH-debit
 * origination, it needs no Plaid processor token.
 *
 * @see https://www.unit.co/docs/api/cards/simulations/#create-atm-deposit
 */

const JSON_API_HEADERS = {
	"Content-Type": "application/vnd.api+json",
	Accept: "application/vnd.api+json",
};

async function rawPost(
	pathname: string,
	body: unknown,
): Promise<Record<string, unknown>> {
	const res = await fetch(`${BASE_PATH}${pathname}`, {
		method: "POST",
		headers: { Authorization: `Bearer ${TOKEN}`, ...JSON_API_HEADERS },
		body: JSON.stringify(body),
	});
	if (!res.ok) {
		throw new Error(`POST ${pathname} -> HTTP ${res.status}: ${await res.text()}`);
	}
	return (await res.json()) as Record<string, unknown>;
}

async function accountBalance(accountId: string): Promise<number> {
	const { data } = await buildAccountsApi().getAccount({ accountId });
	return (data.data as DepositAccount).attributes.balance ?? 0;
}

/**
 * Create a business debit card on the account and return its last-4 digits.
 * The ATM deposit simulation matches the deposit to an existing card, so a
 * fresh account needs one before it can be funded this way. Cards aren't part
 * of the generated SDK slice, so this is a raw call.
 */
async function createDebitCardLast4(accountId: string): Promise<string> {
	const created = await rawPost("/cards", {
		data: {
			type: "businessVirtualDebitCard",
			attributes: {
				fullName: { first: "Peter", last: "Parker" },
				dateOfBirth: "2001-08-10",
				phone: { countryCode: "1", number: "5555555555" },
				email: "peter@oscorp.com",
				address: {
					street: "20 Ingram St",
					city: "Forest Hills",
					state: "NY",
					postalCode: "11375",
					country: "US",
				},
			},
			relationships: {
				account: { data: { type: "depositAccount", id: accountId } },
			},
		},
	});
	const data = created.data as {
		id?: string;
		attributes?: { last4Digits?: string };
	};
	const last4 = data.attributes?.last4Digits;
	if (!data.id || !last4) {
		throw new Error("Created card is missing id or last4Digits.");
	}
	// Virtual debit cards are Active on creation (no physical activation, which
	// an org token isn't allowed to perform anyway), so the ATM deposit
	// simulation can match against this card immediately.
	return last4;
}

async function simulateAtmDeposit(
	accountId: string,
	amount: number,
	last4Digits: string,
): Promise<void> {
	await rawPost("/sandbox/atm-deposits", {
		data: {
			type: "atmTransaction",
			attributes: {
				amount,
				atmName: "SDK Test ATM",
				atmLocation: "Cupertino, CA, US",
				last4Digits,
			},
			relationships: {
				account: { data: { type: "depositAccount", id: accountId } },
			},
		},
	});
}

/**
 * Ensure `accountId` holds at least `minimumBalance` cents, funding it via a
 * simulated ATM deposit if needed. A no-op when the balance already suffices.
 */
export async function fundAccount(
	accountId: string,
	minimumBalance: number,
): Promise<void> {
	if ((await accountBalance(accountId)) >= minimumBalance) return;

	const last4 = await createDebitCardLast4(accountId);
	// Deposit a comfortable multiple so one fund covers several downstream
	// charges within a test run.
	await simulateAtmDeposit(
		accountId,
		Math.max(minimumBalance * 10, 100_000),
		last4,
	);

	for (let attempt = 0; attempt < 20; attempt++) {
		if ((await accountBalance(accountId)) >= minimumBalance) return;
		await sleep(1000);
	}
	throw new Error(
		`Account ${accountId} did not reach balance ${minimumBalance} after funding.`,
	);
}
