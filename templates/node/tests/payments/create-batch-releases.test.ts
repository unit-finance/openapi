import { describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.createBatchReleases", () => {
	it("skips when batch release prerequisites are unavailable", () => {
		// Prerequisites: org-level batch account, receiver account mapping, and
		// sender metadata — not provisioned automatically in this sandbox suite.
		test.skip(
			"Batch releases require org-level batch account configuration not available in this integration suite.",
		);
	});
});
