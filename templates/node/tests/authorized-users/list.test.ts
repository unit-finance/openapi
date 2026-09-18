import { buildAuthorizedUsersApi, describeIfToken } from "../helpers/api";
import { addAuthorizedUserOrSkip } from "../helpers/authorizedUsers";
import { getSharedBusinessCustomerId } from "../helpers/customers";

describeIfToken("AuthorizedUsersApi.listAuthorizedUsers", () => {
	it("returns a JSON:API list of authorized users", async () => {
		const api = buildAuthorizedUsersApi();
		const customerId = await getSharedBusinessCustomerId();
		await addAuthorizedUserOrSkip(customerId);

		const { data, status } = await api.listAuthorizedUsers({ customerId });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		for (const item of data.data as unknown as Array<Record<string, unknown>>) {
			if (item && typeof item === "object" && "id" in item) {
				expect(typeof item.id).toBe("string");
				expect(typeof item.type).toBe("string");
				expect(item.attributes).toBeDefined();
			} else {
				expect(item.fullName).toBeDefined();
				expect(typeof item.email).toBe("string");
				expect(item.phone).toBeDefined();
			}
		}
	});
});
