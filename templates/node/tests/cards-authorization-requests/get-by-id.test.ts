import {
	buildCardsAuthorizationRequestsApi,
	describeIfToken,
} from "../helpers/api";

describeIfToken(
	"CardsAuthorizationRequestsApi.getAuthorizationRequestById",
	() => {
		it("returns an authorization request when one exists", async () => {
			const api = buildCardsAuthorizationRequestsApi();
			const listed = await api.listAuthorizationRequests({ pageLimit: "1" });
			expect(listed.status).toBe(200);

			if (!listed.data.data.length) {
				expect(true).toBe(true);
				return;
			}

			const authorizationRequestId = listed.data.data[0].id as string;
			const { data, status } = await api.getAuthorizationRequestById({
				id: authorizationRequestId,
			});

			expect(status).toBe(200);
			expect(data.data.id).toBe(authorizationRequestId);
			expect(data.data.attributes).toBeDefined();
		});
	},
);
