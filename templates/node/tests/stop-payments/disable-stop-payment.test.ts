import { buildStopPaymentsApi, describeIfToken } from "../helpers/api";
import {
	CHECK_STOP_PAYMENT_TYPE,
	createCheckStopPaymentId,
} from "../helpers/stopPayments";

describeIfToken("StopPaymentsApi.disableStopPayment", () => {
	it("disables a stop payment", async () => {
		const stopPaymentId = await createCheckStopPaymentId();

		const api = buildStopPaymentsApi();
		const { data, status } = await api.disableStopPayment({
			stopPaymentId,
			body: {},
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(stopPaymentId);
		expect(data.data.type).toBe(CHECK_STOP_PAYMENT_TYPE);
		expect(data.data.attributes).toBeDefined();
	});
});
