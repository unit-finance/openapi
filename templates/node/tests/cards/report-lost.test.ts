import { buildCardsApi, describeIfToken } from "../helpers/api";
import { createDedicatedVirtualCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.reportCardLost", () => {
	it("reports a dedicated card as lost", async () => {
		const card = await createDedicatedVirtualCard();
		const api = buildCardsApi();

		const { data, status } = await api.reportCardLost({ cardId: card.cardId });

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(card.cardId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
