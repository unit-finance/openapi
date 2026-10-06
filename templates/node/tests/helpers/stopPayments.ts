import { buildStopPaymentsApi } from "./api";
import {
	buildCreateAchStopPaymentRequest,
	buildCreateCheckStopPaymentRequest,
} from "./fixtures";
import { getOrCreateSharedAccount } from "./sharedAccount";

/**
 * The JSON:API `type` values stop payments deserialize to.
 *
 * The spec says the check variant is `checkStopPayment`, but the sandbox
 * answers create, get, disable and list with the bare `stopPayment` for it —
 * only the ACH variant carries a discriminated `achStopPayment`. Both spellings
 * are accepted here so the suites keep passing when `unit-openapi` reconciles
 * the discriminator.
 */
export const STOP_PAYMENT_TYPES = [
	"stopPayment",
	"checkStopPayment",
	"achStopPayment",
];

/** What the sandbox actually returns for a check stop payment today. */
export const CHECK_STOP_PAYMENT_TYPE = "stopPayment";

function randomCheckNumber(): string {
	return `${Math.floor(Math.random() * 9_000_000 + 1_000_000)}`;
}

async function createStopPayment(request: unknown): Promise<string> {
	const { data, status } = await buildStopPaymentsApi().createStopPayment({
		createStopPaymentRequest: request as never,
	});
	// Throw rather than `expect(...)`: this runs in a helper, not a test body,
	// so a jest assertion would be attributed to the calling test misleadingly.
	if (status !== 201) {
		throw new Error(
			`Failed to create stop payment: expected status 201, got ${status}.`,
		);
	}
	const id = data.data?.id;
	if (typeof id !== "string") {
		throw new Error("Stop payment create response carried no data.id.");
	}
	return id;
}

/**
 * Each caller mints its own stop payment rather than sharing one: `disable`
 * moves a stop payment to `Disabled`, so a shared one would make the run
 * order-dependent.
 */
export async function createCheckStopPaymentId(): Promise<string> {
	const { accountId } = await getOrCreateSharedAccount();
	return createStopPayment(
		buildCreateCheckStopPaymentRequest(accountId, randomCheckNumber()),
	);
}

/** `updateAchStopPayment` only accepts the ACH variant, hence a separate helper. */
export async function createAchStopPaymentId(): Promise<string> {
	const { accountId } = await getOrCreateSharedAccount();
	return createStopPayment(buildCreateAchStopPaymentRequest(accountId));
}
