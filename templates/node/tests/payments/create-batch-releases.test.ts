import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCreateBatchReleasesRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.createBatchReleases", () => {
	it("creates batch releases when a batch account is configured", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const { data, status } = await api.createBatchReleases({
			createBatchReleasesRequest: buildCreateBatchReleasesRequest(
				ctx.accountId,
			),
		});

		expect(status).toBe(201);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
