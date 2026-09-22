import { buildCardsAuthorizationsApi, describeIfToken } from "../helpers/api";

describeIfToken("CardsAuthorizationsApi.listAuthorizations", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildCardsAuthorizationsApi();
		const { data, status } = await api.listAuthorizations({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
