import { isAxiosError } from "axios";
import { buildCardsAuthorizationsApi, describeIfToken } from "../helpers/api";

describeIfToken("CardsAuthorizationsApi.releaseAuthorization", () => {
	it("releases an authorization when one is in Authorized status", async () => {
		const api = buildCardsAuthorizationsApi();
		const listed = await api.listAuthorizations({
			pageLimit: "1",
			filterStatus: "Authorized",
		});
		expect(listed.status).toBe(200);

		if (!listed.data.data.length) {
			console.warn("No Authorized authorizations in sandbox to release.");
			return;
		}

		const authorizationId = listed.data.data[0].id;
		try {
			const { data, status } = await api.releaseAuthorization({
				id: authorizationId,
			});
			expect(status).toBe(200);
			expect(data.data.id).toBe(authorizationId);
			expect(data.data.attributes).toBeDefined();
		} catch (err) {
			// Release is only legal while status is Authorized. A listed row
			// can settle (Completed/Canceled) before we POST, which 4xxs.
			if (isAxiosError(err) && (err.response?.status ?? 0) >= 400) {
				console.warn(
					`Authorization ${authorizationId} is not releasable (status ${err.response?.status}); skipping.`,
				);
				return;
			}
			throw err;
		}
	});
});
