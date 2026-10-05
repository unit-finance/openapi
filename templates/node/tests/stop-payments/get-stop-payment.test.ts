import { buildStopPaymentsApi, describeIfToken } from "../helpers/api";
import {
	CHECK_STOP_PAYMENT_TYPE,
	createCheckStopPaymentId,
} from "../helpers/stopPayments";

describeIfToken("StopPaymentsApi.getStopPayment", () => {
	it("fetches a stop payment by id", async () => {
		const stopPaymentId = await createCheckStopPaymentId();

		const api = buildStopPaymentsApi();
		const { data, status } = await api.getStopPayment({ stopPaymentId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(stopPaymentId);
		expect(data.data.type).toBe(CHECK_STOP_PAYMENT_TYPE);
		expect(data.data.attributes).toBeDefined();
	});
});
