import { buildCardsAuthorizationRequestsApi, describeIfToken } from "../helpers/api";

describeIfToken("CardsAuthorizationRequestsApi.listAuthorizationRequests", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildCardsAuthorizationRequestsApi();
		const { data, status } = await api.listAuthorizationRequests({
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
