import { describeIfToken } from "../helpers/api";
import { addAuthorizedUserOrSkip } from "../helpers/authorizedUsers";
import { getSharedBusinessCustomerId } from "../helpers/customers";

describeIfToken("AuthorizedUsersApi.addAuthorizedUsers", () => {
	it("adds an authorized user to the shared business customer", async () => {
		const customerId = await getSharedBusinessCustomerId();

		const added = await addAuthorizedUserOrSkip(customerId);
		if (!added) return;
		const { data, status } = added.created;

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(customerId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
