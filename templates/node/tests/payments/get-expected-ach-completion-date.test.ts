import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildExpectedAchCompletionDateRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getExpectedAchCompletionDate", () => {
	it("returns an expected ACH completion date", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const { data, status } = await api.getExpectedAchCompletionDate({
			getExpectedAchCompletionDateRequest:
				buildExpectedAchCompletionDateRequest(ctx.accountId),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("achExpectedCompletionDate");
		expect(data.data.attributes).toBeDefined();
	});
});
