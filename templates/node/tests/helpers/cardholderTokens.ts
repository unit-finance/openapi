import { isAxiosError } from "axios";
import type { CardHolderAPITokensApi } from "../..";
import { buildCreateCardholderTokenVerificationRequest } from "./fixtures";

/**
 * Start an OTP challenge for a card, or return `null` when the sandbox rejects
 * it. The challenge is delivered over SMS to the customer's contact phone, and
 * whether an org's cards can receive one is org/bank configuration the API
 * cannot toggle. Every cardholder-token test therefore has to treat a 4xx/5xx
 * here as feature-unavailable rather than fail.
 */
export async function createCardholderTokenVerificationOrSkip(
	api: CardHolderAPITokensApi,
	cardId: string,
) {
	try {
		return await api.createCardholderTokenVerification({
			cardId,
			createCardholderTokenVerificationRequest:
				buildCreateCardholderTokenVerificationRequest(),
		});
	} catch (err) {
		if (isAxiosError(err) && (err.response?.status ?? 0) >= 400) {
			console.warn(
				`Cardholder token verification is unavailable for this sandbox org (status ${err.response?.status}); skipping.`,
			);
			return null;
		}
		throw err;
	}
}
