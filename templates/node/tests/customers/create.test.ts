import { buildCustomersApi, describeIfToken } from "../helpers/api";
import { buildCreateBusinessWalletCustomerRequest } from "../helpers/fixtures";

describeIfToken("CustomersApi.createBusinessWalletCustomer", () => {
	// Skipped: the sandbox org behind UNIT_SANDBOX_TOKEN has no partner bank
	// named "Thread" (the create request 404s with "The specified bank was not
	// found"). The available banks are org config we can't query from this SDK's
	// spec surface. Re-enable (`it.skip` -> `it`) once the fixture's bankName is
	// set to a bank provisioned for the sandbox org.
	it.skip("creates a business wallet customer", async () => {
		const api = buildCustomersApi();
		const { data, status } = await api.createBusinessWalletCustomer({
			createBusinessWalletCustomerRequest:
				buildCreateBusinessWalletCustomerRequest(),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("businessWalletCustomer");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
