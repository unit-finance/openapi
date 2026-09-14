import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckDeposit } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.listCheckDeposits", () => {
	it("returns a JSON:API list with page limit 10", async () => {
		await getOrCreateSharedCheckDeposit();
		const api = buildCheckDepositsApi();

		const { data, status } = await api.listCheckDeposits({ pageLimit: "10" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(10);
		for (const checkDeposit of data.data) {
			expect(checkDeposit.type).toBe("checkDeposit");
			expect(typeof checkDeposit.id).toBe("string");
		}
	});
});
