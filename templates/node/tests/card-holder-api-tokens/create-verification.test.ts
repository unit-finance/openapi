import {
	buildCardHolderApiTokensApi,
	describeIfToken,
} from "../helpers/api";
import { createCardholderTokenVerificationOrSkip } from "../helpers/cardholderTokens";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardHolderAPITokensApi.createCardholderTokenVerification", () => {
	it("starts an OTP challenge for the shared card", async () => {
		const shared = await getOrCreateSharedCard();
		const api = buildCardHolderApiTokensApi();

		const response = await createCardholderTokenVerificationOrSkip(
			api,
			shared.cardId,
		);
		if (!response) return;

		expect(response.status).toBe(201);
		expect(response.data.data).toBeDefined();
		expect(response.data.data?.type).toBe("cardholderTokenVerification");
	});
});
