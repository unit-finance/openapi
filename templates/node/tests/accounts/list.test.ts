import { buildAccountsApi, describeIfToken } from "../helpers/api";

describeIfToken("AccountsApi.listAccounts", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildAccountsApi();
		const { data, status } = await api.listAccounts({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
	});
});
