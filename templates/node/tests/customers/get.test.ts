import { buildCustomersApi, describeIfToken } from "../helpers/api";
import { getSharedBusinessCustomerId } from "../helpers/customers";

describeIfToken("CustomersApi.getCustomer", () => {
	it("returns the shared business customer by id", async () => {
		const api = buildCustomersApi();
		const customerId = await getSharedBusinessCustomerId();

		const { data, status } = await api.getCustomer({ customerId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(customerId);
		expect(data.data.type).toBe("businessCustomer");
		expect(data.data.attributes).toBeDefined();
	});
});
