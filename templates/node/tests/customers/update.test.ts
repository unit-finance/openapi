import { buildCustomersApi, describeIfToken } from "../helpers/api";
import { buildUpdateBusinessCustomerRequest } from "../helpers/fixtures";
import { getSharedBusinessCustomerId } from "../helpers/customers";

describeIfToken("CustomersApi.updateCustomer", () => {
	it("PATCHes the shared business customer tags", async () => {
		const api = buildCustomersApi();
		const customerId = await getSharedBusinessCustomerId();

		const { data, status } = await api.updateCustomer({
			customerId,
			updateCustomerRequest: buildUpdateBusinessCustomerRequest(),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(customerId);
		expect(data.data.type).toBe("businessCustomer");
		expect(data.data.attributes).toBeDefined();
	});
});
