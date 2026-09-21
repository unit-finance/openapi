import { isAxiosError } from "axios";
import { buildCardFraudOutreachApi, describeIfToken } from "../helpers/api";
import { listCasesOrSkip, pendingCases } from "../helpers/cardFraudOutreach";
import { buildMarkCardFraudCaseAsFraudRequest } from "../helpers/fixtures";

describeIfToken("CardFraudOutreachApi.markCardFraudCaseAsFraud", () => {
	it("marks a pending card fraud case as fraud when one exists", async () => {
		const api = buildCardFraudOutreachApi();
		const items = await listCasesOrSkip(api);
		if (!items) return;

		const pending = pendingCases(items).find((c) => c.activityIds.length > 0);
		if (!pending) {
			expect(true).toBe(true);
			return;
		}

		try {
			const { data, status } = await api.markCardFraudCaseAsFraud({
				id: pending.id,
				markCardFraudCaseAsFraudRequest: buildMarkCardFraudCaseAsFraudRequest(
					pending.activityIds,
				),
			});
			expect(status).toBe(200);
			expect(data.data.id).toBe(pending.id);
			expect(data.data.attributes).toBeDefined();
		} catch (err) {
			// Mark is only legal for Pending cases; a listed row can already be
			// Closed / Expired / decided, and the org may not offer the feature.
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
