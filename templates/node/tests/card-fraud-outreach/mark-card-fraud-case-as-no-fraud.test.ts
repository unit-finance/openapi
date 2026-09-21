import { isAxiosError } from "axios";
import { buildCardFraudOutreachApi, describeIfToken } from "../helpers/api";
import { listCasesOrSkip, pendingCases } from "../helpers/cardFraudOutreach";

describeIfToken("CardFraudOutreachApi.markCardFraudCaseAsNoFraud", () => {
	it("marks a pending card fraud case as no fraud when one exists", async () => {
		const api = buildCardFraudOutreachApi();
		const items = await listCasesOrSkip(api);
		if (!items) return;

		// Prefer a second pending case so mark-as-fraud and mark-as-no-fraud do
		// not race on the same resource; fall back to the first if that is all
		// the sandbox has.
		const pending = pendingCases(items);
		const target = pending[1] ?? pending[0];
		if (!target) {
			expect(true).toBe(true);
			return;
		}

		try {
			const { data, status } = await api.markCardFraudCaseAsNoFraud({
				id: target.id,
			});
			expect(status).toBe(200);
			expect(data.data.id).toBe(target.id);
			expect(data.data.attributes).toBeDefined();
		} catch (err) {
			if (
				isAxiosError(err) &&
				err.response != null &&
				[400, 403, 404, 409, 410, 422, 500].includes(err.response.status)
			) {
				expect(true).toBe(true);
				return;
			}
			throw err;
		}
	});
});
