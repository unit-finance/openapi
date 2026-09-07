import { buildCardsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.getCard", () => {
	it("returns the shared card by id", async () => {
		const shared = await getOrCreateSharedCard();
		const api = buildCardsApi();

		const { data, status } = await api.getCard({ cardId: shared.cardId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(shared.cardId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
