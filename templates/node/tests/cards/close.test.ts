import { buildCardsApi, describeIfToken } from "../helpers/api";
import { createDedicatedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.closeCard", () => {
	it("closes a dedicated card", async () => {
		const card = await createDedicatedCard();
		const api = buildCardsApi();

		const { data, status } = await api.closeCard({ cardId: card.cardId });

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(card.cardId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
