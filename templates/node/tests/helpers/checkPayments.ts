import { isAxiosError } from "axios";
import type { CheckPaymentsApi, CheckPayment } from "../..";
import { buildCheckPaymentsApi } from "./api";
import {
	buildApproveCheckPaymentAdditionalVerificationRequest,
	buildOriginateCheckPaymentRequest,
	buildReturnCheckPaymentRequest,
} from "./fixtures";
import { fundAccount } from "./funding";
import { getOrCreateSharedAccount } from "./sharedAccount";

const SKIP_STATUSES = new Set([400, 403, 404, 409, 422, 500, 501]);

function skipStatus(err: unknown): boolean {
	return (
		isAxiosError(err) &&
		typeof err.response?.status === "number" &&
		SKIP_STATUSES.has(err.response.status)
	);
}

/**
 * Originate a mailed check payment, or return `null` when the sandbox org
 * cannot print/mail checks (bank-agreement / feature flag). The POST also
 * needs a funded deposit account.
 */
export async function originateOrSkip(
	api: CheckPaymentsApi,
	accountId: string,
	customerId: string,
) {
	await fundAccount(accountId, 1000);
	try {
		return await api.originateCheckPaymentMailPhysicalCheck({
			originateCheckPaymentMailPhysicalCheckRequest:
				buildOriginateCheckPaymentRequest(accountId, customerId),
		});
	} catch (err) {
		if (skipStatus(err)) {
			console.warn(
				"Check payments are unavailable on this sandbox org; skipping.",
			);
			return null;
		}
		throw err;
	}
}

let cached: Promise<CheckPayment | null> | null = null;

export async function getOrCreateSharedCheckPayment(): Promise<CheckPayment | null> {
	if (!cached) {
		cached = (async () => {
			const shared = await getOrCreateSharedAccount();
			const created = await originateOrSkip(
				buildCheckPaymentsApi(),
				shared.accountId,
				shared.customerId,
			);
			return created?.data.data ?? null;
		})();
	}
	return cached;
}

export async function getCheckImageOrSkip(
	api: CheckPaymentsApi,
	checkPaymentId: string,
) {
	try {
		return await api.getCheckImage({
			checkPaymentId,
			side: "front",
			type: "printed",
		});
	} catch (err) {
		if (skipStatus(err)) return null;
		throw err;
	}
}

export async function cancelOrSkip(
	api: CheckPaymentsApi,
	checkPaymentId: string,
) {
	try {
		return await api.cancelCheckPayment({ checkPaymentId });
	} catch (err) {
		if (skipStatus(err)) return null;
		throw err;
	}
}

export async function returnOrSkip(
	api: CheckPaymentsApi,
	checkPaymentId: string,
) {
	try {
		return await api.returnCheckPayment({
			checkPaymentId,
			returnCheckPaymentRequest: buildReturnCheckPaymentRequest(),
		});
	} catch (err) {
		if (skipStatus(err)) return null;
		throw err;
	}
}

export async function approveOrSkip(
	api: CheckPaymentsApi,
	checkPaymentId: string,
) {
	try {
		return await api.approveCheckPaymentAdditionalVerification({
			checkPaymentId,
			approveCheckPaymentAdditionalVerificationRequest:
				buildApproveCheckPaymentAdditionalVerificationRequest(),
		});
	} catch (err) {
		if (skipStatus(err)) return null;
		throw err;
	}
}
