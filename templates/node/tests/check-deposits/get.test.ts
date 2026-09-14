import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckDeposit } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.getCheckDeposit", () => {
	it("gets a check deposit by id", async () => {
		const shared = await getOrCreateSharedCheckDeposit();
		const api = buildCheckDepositsApi();

		const { data, status } = await api.getCheckDeposit({
			checkDepositId: shared.id,
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkDeposit");
		expect(data.data.id).toBe(shared.id);
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});
});
