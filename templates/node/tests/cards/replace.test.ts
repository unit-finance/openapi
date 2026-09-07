import { buildCardsApi, describeIfToken } from "../helpers/api";
import { buildReplaceCardRequest } from "../helpers/fixtures";
import { createDedicatedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.replaceCard", () => {
	it("replaces a dedicated physical card", async () => {
		const card = await createDedicatedCard();
		const api = buildCardsApi();

		const { data, status } = await api.replaceCard({
			cardId: card.cardId,
			replaceCardRequest: buildReplaceCardRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(typeof data.data.id).toBe("string");
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
