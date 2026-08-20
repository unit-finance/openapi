import { buildAccountsApi, describeIfToken } from "../helpers/api";

describeIfToken("AccountsApi.listAccountHolds", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildAccountsApi();
		const { data, status } = await api.listAccountHolds({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
	});
});
