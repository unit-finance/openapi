import { buildStopPaymentsApi, describeIfToken } from "../helpers/api";
import { buildUpdateAchStopPaymentRequest } from "../helpers/fixtures";
import { createAchStopPaymentId } from "../helpers/stopPayments";

describeIfToken("StopPaymentsApi.updateAchStopPayment", () => {
	it("updates the expiration and tags of an ACH stop payment", async () => {
		const stopPaymentId = await createAchStopPaymentId();

		const api = buildStopPaymentsApi();
		const { data, status } = await api.updateAchStopPayment({
			stopPaymentId,
			updateAchStopPaymentRequest: buildUpdateAchStopPaymentRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(stopPaymentId);
		expect(data.data.type).toBe("achStopPayment");
		expect(data.data.attributes).toBeDefined();
	});
});
