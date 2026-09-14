import { buildCustomersApi, describeIfToken } from "../helpers/api";
import { buildUpdateBusinessCustomerOfficerRequest } from "../helpers/fixtures";
import { getSharedBusinessCustomerOfficerId } from "../helpers/customers";

describeIfToken("CustomersApi.updateBusinessCustomerOfficer", () => {
	it("PATCHes the shared business customer's officer", async () => {
		const api = buildCustomersApi();
		const { customerId, officerId } =
			await getSharedBusinessCustomerOfficerId();

		const { data, status } = await api.updateBusinessCustomerOfficer({
			customerId,
			officerId,
			updateBusinessCustomerOfficerRequest:
				buildUpdateBusinessCustomerOfficerRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.type).toBe("officer");
		expect(data.data.attributes).toBeDefined();
	});
});
