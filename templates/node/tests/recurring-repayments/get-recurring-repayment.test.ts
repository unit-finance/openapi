import { buildRecurringRepaymentsApi, describeIfToken } from "../helpers/api";
import {
	RECURRING_REPAYMENT_TYPES,
	getRecurringRepaymentId,
} from "../helpers/repayments";

describeIfToken("RecurringRepaymentsApi.getRecurringRepayment", () => {
	it("fetches a recurring repayment by id", async () => {
		const id = await getRecurringRepaymentId();
		if (!id) return;

		const api = buildRecurringRepaymentsApi();
		const { data, status } = await api.getRecurringRepayment({ id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(id);
		expect(RECURRING_REPAYMENT_TYPES).toContain(data.data.type);
		expect(data.data.attributes).toBeDefined();
	});
});
