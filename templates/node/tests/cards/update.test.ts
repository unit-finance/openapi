import { buildCardsApi, describeIfToken } from "../helpers/api";
import { buildUpdateCardRequest } from "../helpers/fixtures";
import { createDedicatedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.updateCard", () => {
	it("PATCHes a dedicated card's card-holder contact", async () => {
		const card = await createDedicatedCard();
		const api = buildCardsApi();

		const { data, status } = await api.updateCard({
			cardId: card.cardId,
			updateCardRequest: buildUpdateCardRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(card.cardId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
