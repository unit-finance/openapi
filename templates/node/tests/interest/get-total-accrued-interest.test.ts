import { buildInterestApi, describeIfToken } from "../helpers/api";
import { accruedInterestWindow } from "../helpers/receivables";

describeIfToken("InterestApi.getTotalAccruedInterest", () => {
	it("totals accrued interest over a since/until window", async () => {
		const api = buildInterestApi();
		const { since, until } = accruedInterestWindow();

		const { data, status } = await api.getTotalAccruedInterest({
			filterSince: since,
			filterUntil: until,
		});

		expect(status).toBe(200);
		// The spec types `data` as a bare `{ amount }` object, but the sandbox
		// answers with a full JSON:API resource (`type`/`attributes.amount`), so
		// the typed `data.amount` is undefined. Assert the envelope the API
		// actually returns; the mismatch is tracked in SLICES.md.
		const resource = data.data as unknown as {
			type?: string;
			attributes?: { amount?: number };
		};
		expect(resource.type).toBe("totalAccruedInterest");
		expect(typeof resource.attributes?.amount).toBe("number");
	});
});
