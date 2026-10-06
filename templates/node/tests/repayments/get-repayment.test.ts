import { buildRepaymentsApi, describeIfToken } from "../helpers/api";
import { REPAYMENT_TYPES, getRepaymentId } from "../helpers/repayments";

describeIfToken("RepaymentsApi.getRepayment", () => {
	it("fetches a repayment by id", async () => {
		const repaymentId = await getRepaymentId();
		if (!repaymentId) return;

		const api = buildRepaymentsApi();
		const { data, status } = await api.getRepayment({ repaymentId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(repaymentId);
		expect(REPAYMENT_TYPES).toContain(data.data.type);
		expect(data.data.attributes).toBeDefined();
	});
});
