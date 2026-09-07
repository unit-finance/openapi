import { buildCardsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.getCardLimits", () => {
	it("returns limits for the shared card", async () => {
		const shared = await getOrCreateSharedCard();
		const api = buildCardsApi();

		const { data, status } = await api.getCardLimits({ cardId: shared.cardId });

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
	});
});
