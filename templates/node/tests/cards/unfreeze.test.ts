import { buildCardsApi, describeIfToken } from "../helpers/api";
import { buildFreezeCardRequest } from "../helpers/fixtures";
import { createDedicatedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.unfreezeCard", () => {
	it("freezes then unfreezes a dedicated card", async () => {
		const card = await createDedicatedCard();
		const api = buildCardsApi();

		const frozen = await api.freezeCard({
			cardId: card.cardId,
			freezeCardRequest: buildFreezeCardRequest(),
		});
		expect([200, 201]).toContain(frozen.status);

		const { data, status } = await api.unfreezeCard({ cardId: card.cardId });

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(card.cardId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
