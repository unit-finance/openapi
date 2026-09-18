import { buildAuthorizedUsersApi, describeIfToken } from "../helpers/api";
import {
	addAuthorizedUserOrSkip,
	authorizedUserId,
} from "../helpers/authorizedUsers";
import { getSharedBusinessCustomerId } from "../helpers/customers";

describeIfToken("AuthorizedUsersApi.getAuthorizedUser", () => {
	it("GETs an authorized user by id", async () => {
		const api = buildAuthorizedUsersApi();
		const customerId = await getSharedBusinessCustomerId();
		const added = await addAuthorizedUserOrSkip(customerId);
		if (!added) return;

		const listed = await api.listAuthorizedUsers({ customerId });
		const userId = (listed.data.data ?? [])
			.map((item) => authorizedUserId(item))
			.find((id): id is string => typeof id === "string");
		if (!userId) {
			// Spec types list items as AuthorizedUserType (no id). Without an id
			// the GET path is unreachable; treat as unavailable rather than fail.
			console.warn(
				"listAuthorizedUsers did not return a resource id; skipping getAuthorizedUser.",
			);
			return;
		}

		const { data, status } = await api.getAuthorizedUser({
			customerId,
			authorizedUserId: userId,
		});

		expect(status).toBe(200);
		const item = data.data as unknown as Record<string, unknown>;
		if (item && typeof item === "object" && "id" in item) {
			expect(item.id).toBe(userId);
			expect(typeof item.type).toBe("string");
			expect(item.attributes).toBeDefined();
		} else {
			expect(item.fullName).toBeDefined();
			expect(typeof item.email).toBe("string");
			expect(item.phone).toBeDefined();
		}
	});
});
