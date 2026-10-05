import { buildRecurringRepaymentsApi, describeIfToken } from "../helpers/api";
import {
	RECURRING_REPAYMENT_TYPES,
	createRecurringRepaymentOrSkip,
} from "../helpers/repayments";

describeIfToken("RecurringRepaymentsApi.enableRecurringRepayment", () => {
	it("re-enables a disabled recurring repayment", async () => {
		const recurring = await createRecurringRepaymentOrSkip();
		if (!recurring) return;

		// A recurring repayment is created `Active`, and `enable` is only valid
		// from `Disabled`, so this suite disables its own schedule first rather
		// than sharing one with the disable suite.
		const api = buildRecurringRepaymentsApi();
		await api.disableRecurringRepayment({ id: recurring.id, body: {} });

		const { data, status } = await api.enableRecurringRepayment({
			id: recurring.id,
			body: {},
		});

		expect(status).toBe(200);
		expect(data.data.id).toBe(recurring.id);
		expect(RECURRING_REPAYMENT_TYPES).toContain(data.data.type);
		expect(data.data.attributes).toBeDefined();
	});
});
