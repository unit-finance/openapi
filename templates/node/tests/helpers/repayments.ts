import { buildRecurringRepaymentsApi, buildRepaymentsApi } from "./api";
import { errorBody, isCapabilityError } from "./capabilities";
import {
	buildCreateBookRepaymentRequest,
	buildCreateExternalRepaymentRequest,
	buildCreateRecurringBookRepaymentRequest,
} from "./fixtures";
import { getCreditAccountId } from "./creditAccounts";
import { getOrCreateSharedAccount } from "./sharedAccount";

/** The JSON:API `type` values the repayment variants deserialize to. */
export const REPAYMENT_TYPES = [
	"achRepayment",
	"bookRepayment",
	"capitalPartnerAchRepayment",
	"capitalPartnerBookRepayment",
	"externalRepayment",
];

/** The JSON:API `type` values the recurring repayment variants deserialize to. */
export const RECURRING_REPAYMENT_TYPES = [
	"recurringAchRepayment",
	"recurringBookRepayment",
	"recurringCapitalPartnerAchRepayment",
	"recurringCapitalPartnerBookRepayment",
];

/**
 * Create a book repayment, or `null` when repayments are unreachable on this
 * org. Every repayment needs a `creditAccount`, which needs a credit product
 * on the org's bank agreement; see `creditAccounts.ts`. Repaying also requires
 * a drawn balance on the credit account, which the sandbox will not always
 * have, so a rejected repayment is treated as unavailable too.
 */
export async function createBookRepaymentOrSkip(): Promise<{
	id: string;
	type: string;
} | null> {
	const creditAccountId = await getCreditAccountId();
	if (!creditAccountId) return null;

	const { accountId, counterpartyAccountId } = await getOrCreateSharedAccount();
	try {
		const { data, status } = await buildRepaymentsApi().createRepayment({
			createRepaymentRequest: buildCreateBookRepaymentRequest(
				accountId,
				creditAccountId,
				counterpartyAccountId,
			) as never,
		});
		if (status !== 201) {
			throw new Error(
				`Failed to create repayment: expected status 201, got ${status}.`,
			);
		}
		return { id: data.data.id, type: data.data.type };
	} catch (err) {
		if (isCapabilityError(err)) {
			console.warn(
				`Repayments are not available on this sandbox org; skipping. ${errorBody(err)}`,
			);
			return null;
		}
		throw err;
	}
}

/**
 * An external repayment id for `returnExternalRepayment` to reverse. `return`
 * is only valid for the external variant in `Sent` status, so the id cannot
 * come from the book repayment above.
 */
export async function createExternalRepaymentOrSkip(): Promise<string | null> {
	const creditAccountId = await getCreditAccountId();
	if (!creditAccountId) return null;

	try {
		const { data, status } = await buildRepaymentsApi().createRepayment({
			createRepaymentRequest:
				buildCreateExternalRepaymentRequest(creditAccountId) as never,
		});
		if (status !== 201) {
			throw new Error(
				`Failed to create external repayment: expected status 201, got ${status}.`,
			);
		}
		return data.data.id;
	} catch (err) {
		if (isCapabilityError(err)) {
			console.warn(
				`External repayments are not available on this sandbox org; skipping. ${errorBody(err)}`,
			);
			return null;
		}
		throw err;
	}
}

/**
 * A repayment id for the read suite. Prefers one this run created; falls back
 * to an existing repayment so the read is still covered on an org that cannot
 * create one.
 */
export async function getRepaymentId(): Promise<string | null> {
	const created = await createBookRepaymentOrSkip();
	if (created) return created.id;

	const { data } = await buildRepaymentsApi().listRepayments({
		pageLimit: "1",
	});
	const first = Array.isArray(data.data) ? data.data[0] : undefined;
	return first && typeof first.id === "string" ? first.id : null;
}

/**
 * Create a recurring book repayment, or `null` when unreachable. Each caller
 * mints its own: `enable` / `disable` flip the schedule's status, so a shared
 * one would make the run order-dependent.
 */
export async function createRecurringRepaymentOrSkip(): Promise<{
	id: string;
	type: string;
} | null> {
	const creditAccountId = await getCreditAccountId();
	if (!creditAccountId) return null;

	const { accountId, counterpartyAccountId } = await getOrCreateSharedAccount();
	try {
		const { data, status } =
			await buildRecurringRepaymentsApi().createRecurringRepayment({
				createRecurringRepaymentRequest:
					buildCreateRecurringBookRepaymentRequest(
						accountId,
						creditAccountId,
						counterpartyAccountId,
					) as never,
			});
		if (status !== 201) {
			throw new Error(
				`Failed to create recurring repayment: expected status 201, got ${status}.`,
			);
		}
		return { id: data.data.id, type: data.data.type };
	} catch (err) {
		if (isCapabilityError(err)) {
			console.warn(
				`Recurring repayments are not available on this sandbox org; skipping. ${errorBody(err)}`,
			);
			return null;
		}
		throw err;
	}
}

/** A recurring repayment id for the read suite, created or pre-existing. */
export async function getRecurringRepaymentId(): Promise<string | null> {
	const created = await createRecurringRepaymentOrSkip();
	if (created) return created.id;

	const { data } =
		await buildRecurringRepaymentsApi().listRecurringRepayments({
			pageLimit: "1",
		});
	const first = Array.isArray(data.data) ? data.data[0] : undefined;
	return first && typeof first.id === "string" ? first.id : null;
}
