import { isAxiosError } from "axios";
import type { ACHCounterparty, CounterpartiesApi } from "../..";
import { buildCounterpartiesApi } from "./api";
import { buildCreateCounterpartyRequest } from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

/** Creates an ACH counterparty owned by the shared business customer. */
export async function createDedicatedCounterparty(): Promise<ACHCounterparty> {
	const shared = await getOrCreateSharedAccount();
	const api = buildCounterpartiesApi();
	const { data, status } = await api.createCounterparty({
		createCounterpartyBody: buildCreateCounterpartyRequest(
			shared.customerId,
			shared.routingNumber,
			shared.accountNumber,
		),
	});
	if (status !== 201) {
		throw new Error(
			`Failed to create counterparty: expected status 201, got ${status}.`,
		);
	}
	return data.data;
}

let cached: Promise<ACHCounterparty> | null = null;

/**
 * Lazily creates one counterparty that the read-only suites (`get`, `list`,
 * `get-balance`) reuse. `update` and `delete` provision their own so they never
 * mutate or remove a resource another file depends on.
 */
export function getOrCreateSharedCounterparty(): Promise<ACHCounterparty> {
	if (cached) return cached;
	cached = createDedicatedCounterparty();
	return cached;
}

/**
 * Read a counterparty balance, or return `null` when the sandbox does not
 * expose one for this counterparty. Balances are only tracked for counterparties
 * linked through Plaid, so an account/routing-number counterparty answers with a
 * validation error rather than a resource — a property of the counterparty kind
 * we can create here, not of the request.
 */
export async function getCounterpartyBalanceOrSkip(
	api: CounterpartiesApi,
	counterpartyId: string,
) {
	try {
		return await api.getCounterpartyBalance({ counterpartyId });
	} catch (err) {
		if (
			isAxiosError(err) &&
			(err.response?.status === 400 || err.response?.status === 404)
		) {
			console.warn(
				`No balance available for counterparty ${counterpartyId} (balances require a Plaid-linked counterparty); skipping.`,
			);
			return null;
		}
		throw err;
	}
}
