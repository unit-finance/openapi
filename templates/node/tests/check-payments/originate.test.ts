import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import { originateOrSkip } from "../helpers/checkPayments";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("CheckPaymentsApi.originateCheckPaymentMailPhysicalCheck", () => {
	it("originates a mailed check payment on the shared account", async () => {
		const api = buildCheckPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const created = await originateOrSkip(
			api,
			shared.accountId,
			shared.customerId,
		);
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(data.data.type).toBe("checkPayment");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});
});
