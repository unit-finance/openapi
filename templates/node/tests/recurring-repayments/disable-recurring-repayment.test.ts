import { buildRecurringRepaymentsApi, describeIfToken } from "../helpers/api";
import {
	RECURRING_REPAYMENT_TYPES,
	createRecurringRepaymentOrSkip,
} from "../helpers/repayments";

describeIfToken("RecurringRepaymentsApi.disableRecurringRepayment", () => {
	it("disables a recurring repayment", async () => {
		const recurring = await createRecurringRepaymentOrSkip();
		if (!recurring) return;

		const api = buildRecurringRepaymentsApi();
		const { data, status } = await api.disableRecurringRepayment({
			id: recurring.id,
			body: {},
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(recurring.id);
		expect(RECURRING_REPAYMENT_TYPES).toContain(data.data.type);
		expect(data.data.attributes).toBeDefined();
	});
});
