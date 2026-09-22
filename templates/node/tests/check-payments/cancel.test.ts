import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import { cancelOrSkip, originateOrSkip } from "../helpers/checkPayments";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CheckPaymentsApi.cancelCheckPayment", () => {
	it("cancels a pending originated check payment", async () => {
		const api = buildCheckPaymentsApi();
		const shared = await getOrCreateSharedAccount();
		const created = await originateOrSkip(
			api,
			shared.accountId,
			shared.customerId,
		);
		if (!created) return;

		const canceled = await cancelOrSkip(api, created.data.data.id);
		if (!canceled) return;

		expect(canceled.status).toBe(200);
		expect(canceled.data.data.type).toBe("checkPayment");
		expect(canceled.data.data.id).toBe(created.data.data.id);
		expect(canceled.data.data.attributes).toBeDefined();
	});
});
