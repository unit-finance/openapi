import { buildRepaymentsApi, describeIfToken } from "../helpers/api";
import { errorBody, isCapabilityError } from "../helpers/capabilities";
import { buildReturnExternalRepaymentRequest } from "../helpers/fixtures";
import { createExternalRepaymentOrSkip } from "../helpers/repayments";

describeIfToken("RepaymentsApi.returnExternalRepayment", () => {
	it("returns an external repayment", async () => {
		const repaymentId = await createExternalRepaymentOrSkip();
		if (!repaymentId) return;

		const api = buildRepaymentsApi();
		try {
			const { data, status } = await api.returnExternalRepayment({
				repaymentId,
				returnExternalRepaymentRequest:
					buildReturnExternalRepaymentRequest(repaymentId),
			});

			expect(status).toBe(200);
			expect(data.data.id).toBe(repaymentId);
			expect(data.data.type).toBe("externalRepayment");
			expect(data.data.attributes).toBeDefined();
		} catch (err) {
			// `return` is only valid once the repayment has settled to `Sent`.
			// The sandbox creates it `Pending` and there is no way to advance it,
			// so a rejected return is an unreachable state, not a bad request.
			if (isCapabilityError(err)) {
				console.warn(
					`The external repayment is not in a returnable state on this sandbox org; skipping. ${errorBody(err)}`,
				);
				return;
			}
			throw err;
		}
	});
});
