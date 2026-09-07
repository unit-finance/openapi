import { buildCardsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCard } from "../helpers/sharedCard";

describeIfToken("CardsApi.listCards", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		await getOrCreateSharedCard();
		const api = buildCardsApi();

		const { data, status } = await api.listCards({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
