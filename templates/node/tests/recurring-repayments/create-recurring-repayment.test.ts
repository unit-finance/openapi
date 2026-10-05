import { describeIfToken } from "../helpers/api";
import {
	RECURRING_REPAYMENT_TYPES,
	createRecurringRepaymentOrSkip,
} from "../helpers/repayments";

describeIfToken("RecurringRepaymentsApi.createRecurringRepayment", () => {
	it("creates a recurring book repayment", async () => {
		const recurring = await createRecurringRepaymentOrSkip();
		if (!recurring) return;

		expect(RECURRING_REPAYMENT_TYPES).toContain(recurring.type);
		expect(typeof recurring.id).toBe("string");
	});
});
