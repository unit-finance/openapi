import { buildCustomersApi, describeIfToken } from "../helpers/api";
import { buildArchiveCustomerRequest } from "../helpers/fixtures";
import { createIndividualCustomerId } from "../helpers/individualCustomer";

describeIfToken("CustomersApi.archiveCustomer", () => {
	// Skipped: blocked on an upstream spec fix. ArchiveCustomerData.type is the
	// constant "customerArchive", but the sandbox only accepts "archiveCustomer"
	// and rejects the request with a 400 (source pointer /data/type) before it
	// succeeds. Re-enable (`it.skip` -> `it`) once the spec's discriminator
	// constant is corrected.
	it.skip("archives a dedicated individual customer", async () => {
		const api = buildCustomersApi();
		// Archive a fresh, account-less individual customer so the shared
		// business customer stays usable for the other suites.
		const customerId = await createIndividualCustomerId();

		const { data, status } = await api.archiveCustomer({
			customerId,
			archiveCustomerRequest: buildArchiveCustomerRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(customerId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
