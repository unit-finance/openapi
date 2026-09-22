import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import {
	approveOrSkip,
	getOrCreateSharedCheckPayment,
} from "../helpers/checkPayments";

describeIfToken(
	"CheckPaymentsApi.approveCheckPaymentAdditionalVerification",
	() => {
		it("approves additional verification when the payment requires it", async () => {
			const shared = await getOrCreateSharedCheckPayment();
			if (!shared) return;
			const api = buildCheckPaymentsApi();

			const approved = await approveOrSkip(api, shared.id);
			if (!approved) return;

			expect(approved.status).toBe(200);
			expect(approved.data.data.type).toBe("checkPayment");
			expect(approved.data.data.id).toBe(shared.id);
			expect(approved.data.data.attributes).toBeDefined();
		});
	},
);
