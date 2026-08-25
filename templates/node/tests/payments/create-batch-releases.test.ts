import { describeIfToken } from "../helpers/api";

describeIfToken("PaymentsApi.createBatchReleases", () => {
	// Prerequisites: org-level batch account, receiver account mapping, and
	// sender metadata — not provisioned automatically in this sandbox suite.
	it.skip("creates batch releases (requires org-level batch account configuration)", () => {
		// Intentionally skipped: batch releases require org-level batch account
		// configuration not available in this integration suite.
	});
});
