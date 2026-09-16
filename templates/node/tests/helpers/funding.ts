import type { DepositAccount } from "../..";
import {
	BASE_PATH,
	TOKEN,
	buildAccountsApi,
	buildCardsApi,
	sleep,
} from "./api";
import { buildCreateBusinessVirtualDebitCardRequest } from "./fixtures";

/**
 * Funds a sandbox deposit account so balance-dependent operations (fees, holds,
 * outbound payments) succeed instead of failing with `InsufficientFunds`.
 *
 * Unit's sandbox exposes a one-shot ATM deposit simulation that credits an
 * account immediately (firing a Transaction Created event). That simulation is
 * not in the OpenAPI spec, so it is called with raw fetch. The card the
 * simulation matches against is created with `CardsApi`.
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
 * Create a business virtual debit card on the account and return its last-4
 * digits. The ATM deposit simulation matches the deposit to an existing card.
 * Virtual debit cards are Active on creation, so the simulation can match
 * immediately (no physical activation).
 */
async function createDebitCardLast4(accountId: string): Promise<string> {
	const { data, status } = await buildCardsApi().createCard({
		createCardRequest: buildCreateBusinessVirtualDebitCardRequest(accountId),
	});
	if (status !== 201) {
		throw new Error(`Failed to create card: expected status 201, got ${status}.`);
	}
	const last4 = (
		data.data.attributes as { last4Digits?: string } | undefined
	)?.last4Digits;
	if (!data.data.id || !last4) {
		throw new Error("Created card is missing id or last4Digits.");
	}
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
