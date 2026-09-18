import { buildAuthorizedUsersApi, describeIfToken } from "../helpers/api";
import { addAuthorizedUserOrSkip } from "../helpers/authorizedUsers";
import { getSharedBusinessCustomerId } from "../helpers/customers";
import { buildRemoveAuthorizedUsersRequest } from "../helpers/fixtures";

describeIfToken("AuthorizedUsersApi.removeAuthorizedUsers", () => {
	it("removes an authorized user from the shared business customer", async () => {
		const api = buildAuthorizedUsersApi();
		const customerId = await getSharedBusinessCustomerId();
		const added = await addAuthorizedUserOrSkip(customerId);
		if (!added) return;

		const { data, status } = await api.removeAuthorizedUsers({
			customerId,
			removeAuthorizedUsersRequest: buildRemoveAuthorizedUsersRequest([
				added.user.email,
			]),
		});

		expect([200, 201]).toContain(status);
		expect(data.data.id).toBe(customerId);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
