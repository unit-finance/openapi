import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckPayment } from "../helpers/checkPayments";

describeIfToken("CheckPaymentsApi.getCheckPayment", () => {
	it("gets a check payment by id", async () => {
		const shared = await getOrCreateSharedCheckPayment();
		if (!shared) return;
		const api = buildCheckPaymentsApi();

		const { data, status } = await api.getCheckPayment({
			checkPaymentId: shared.id,
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkPayment");
		expect(data.data.id).toBe(shared.id);
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});
});
