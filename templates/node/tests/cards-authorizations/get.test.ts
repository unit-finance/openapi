import { buildCardsAuthorizationsApi, describeIfToken } from "../helpers/api";

describeIfToken("CardsAuthorizationsApi.getAuthorization", () => {
	it("returns an authorization when one exists", async () => {
		const api = buildCardsAuthorizationsApi();
		const listed = await api.listAuthorizations({
			pageLimit: "1",
			filterIncludeNonAuthorized: "true",
		});
		expect(listed.status).toBe(200);

		if (!listed.data.data.length) {
			expect(true).toBe(true);
			return;
		}

		const authorizationId = listed.data.data[0].id;
		const { data, status } = await api.getAuthorization({
			id: authorizationId,
			filterIncludeNonAuthorized: "true",
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(authorizationId);
		expect(data.data.attributes).toBeDefined();
	});
});
