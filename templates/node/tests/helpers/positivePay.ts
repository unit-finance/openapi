import type { CreatePositivePayRequest } from "../..";
import { buildPositivePayApi } from "./api";
import {
	buildCreateCheckPaymentPositivePayRequest,
	buildCreateWireDrawdownPositivePayRequest,
} from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

/**
 * Create a Positive Pay rule on the shared account and return its id.
 *
 * Each caller mints its own rule rather than sharing one: `cancel` moves a
 * rule to `Cancelled` and `uploadPositivePayDocument` moves a drawdown rule
 * from `AwaitingDocuments` to `Active`, so a shared rule would make the run
 * order-dependent.
 */
async function createPositivePayRule(
	request: CreatePositivePayRequest,
): Promise<string> {
	const { data, status } = await buildPositivePayApi().createPositivePay({
		createPositivePayRequest: request,
	});
	// Throw rather than `expect(...)`: this runs in a helper, not a test body,
	// so a jest assertion would be attributed to the calling test misleadingly.
	if (status !== 201) {
		throw new Error(
			`Failed to create Positive Pay rule: expected status 201, got ${status}.`,
		);
	}
	const id = data.data?.id;
	if (typeof id !== "string") {
		throw new Error("Positive Pay create response carried no data.id.");
	}
	return id;
}

/** An `Active` check-payment rule for the get / cancel suites to read. */
export async function createCheckPaymentPositivePayId(): Promise<string> {
	const { accountId } = await getOrCreateSharedAccount();
	return createPositivePayRule(
		buildCreateCheckPaymentPositivePayRequest(
			accountId,
		) as CreatePositivePayRequest,
	);
}

/**
 * A drawdown rule, which is created `AwaitingDocuments` — the only state the
 * document upload accepts.
 */
export async function createWireDrawdownPositivePayId(): Promise<string> {
	const { accountId } = await getOrCreateSharedAccount();
	return createPositivePayRule(
		buildCreateWireDrawdownPositivePayRequest(
			accountId,
		) as CreatePositivePayRequest,
	);
}

/** The JSON:API `type` values the three Positive Pay variants deserialize to. */
export const POSITIVE_PAY_TYPES = [
	"checkPaymentPositivePay",
	"receivedAchDebitPositivePay",
	"drawdownPositivePay",
];
