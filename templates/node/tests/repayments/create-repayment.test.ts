import { describeIfToken } from "../helpers/api";
import {
	REPAYMENT_TYPES,
	createBookRepaymentOrSkip,
} from "../helpers/repayments";

describeIfToken("RepaymentsApi.createRepayment", () => {
	it("creates a book repayment against a credit account", async () => {
		const repayment = await createBookRepaymentOrSkip();
		if (!repayment) return;

		expect(REPAYMENT_TYPES).toContain(repayment.type);
		expect(typeof repayment.id).toBe("string");
	});
});
