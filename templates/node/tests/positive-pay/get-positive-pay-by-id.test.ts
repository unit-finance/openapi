import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import { createCheckPaymentPositivePayId } from "../helpers/positivePay";

describeIfToken("PositivePayApi.getPositivePayById", () => {
	it("reads a single Positive Pay rule", async () => {
		const api = buildPositivePayApi();
		const positivePayId = await createCheckPaymentPositivePayId();

		const { data, status } = await api.getPositivePayById({ positivePayId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(positivePayId);
		expect(data.data.type).toBe("checkPaymentPositivePay");
		expect(data.data.attributes).toBeDefined();
		expect(typeof data.data.attributes.status).toBe("string");
	});
});
