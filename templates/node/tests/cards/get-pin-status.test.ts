import { buildCardsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.getCardPinStatus", () => {
	it("returns the PIN status for the shared card", async () => {
		const shared = await getOrCreateSharedCard();
		const api = buildCardsApi();

		const { data, status } = await api.getCardPinStatus({
			cardId: shared.cardId,
		});

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
		expect(data.data.type).toBeDefined();
	});
});
