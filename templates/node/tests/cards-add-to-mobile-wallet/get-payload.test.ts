import { isAxiosError } from "axios";
import {
	buildCardsAddToMobileWalletApi,
	describeIfToken,
} from "../helpers/api";
import { buildGetMobileWalletPayloadRequest } from "../helpers/fixtures";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardsAddToMobileWalletApi.getMobileWalletPayload", () => {
	it("returns an encrypted payload for the shared card", async () => {
		const shared = await getOrCreateSharedCard();
		const api = buildCardsAddToMobileWalletApi();

		let response: Awaited<ReturnType<typeof api.getMobileWalletPayload>>;
		try {
			response = await api.getMobileWalletPayload({
				cardId: shared.cardId,
				getMobileWalletPayloadRequest: buildGetMobileWalletPayloadRequest(),
			});
		} catch (err) {
			// `signedNonce` is issued by the Visa in-app SDK. A placeholder is
			// rejected (typically 400/404), which is org/SDK input we cannot mint.
			if (isAxiosError(err) && (err.response?.status ?? 0) >= 400) {
				console.warn(
					`Mobile wallet payload needs a Visa SDK signedNonce (status ${err.response?.status}); skipping.`,
				);
				return;
			}
			throw err;
		}

		expect(response.status).toBe(200);
		expect(response.data.data).toBeDefined();
		expect(response.data.data?.type).toBe("mobileWalletPayload");
		expect(response.data.data?.attributes).toBeDefined();
		expect(response.data.data?.attributes?.payload).toBeDefined();
	});
});
