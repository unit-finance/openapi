import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import { createCheckPaymentPositivePayId } from "../helpers/positivePay";

describeIfToken("PositivePayApi.cancelPositivePay", () => {
	it("cancels a Positive Pay rule it created", async () => {
		const api = buildPositivePayApi();
		const positivePayId = await createCheckPaymentPositivePayId();

		// The spec declares the cancel body as an optional untyped `object`; the
		// sandbox accepts an empty one.
		const { data, status } = await api.cancelPositivePay({
			positivePayId,
			body: {},
		});

		// The spec documents 200 for this operation, but the sandbox answers 201.
		// Tracked in SLICES.md as a spec defect owned by `unit-openapi`.
		expect(status).toBe(201);
		expect(data.data.id).toBe(positivePayId);
		expect(data.data.type).toBe("checkPaymentPositivePay");
		expect(typeof data.data.attributes.status).toBe("string");
	});
});
