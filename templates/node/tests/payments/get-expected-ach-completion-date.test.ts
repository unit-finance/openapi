import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildGetExpectedAchCompletionDateRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getExpectedAchCompletionDate", () => {
	it("returns the expected ACH completion date for a credit transfer", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const { data, status } = await api.getExpectedAchCompletionDate({
			getExpectedAchCompletionDateRequest:
				buildGetExpectedAchCompletionDateRequest(shared.accountId),
		});

		expect(status).toBe(200);
		expect(data.data).toBeDefined();
	});
});
