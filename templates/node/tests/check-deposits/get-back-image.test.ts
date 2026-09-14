import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckDeposit } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.getCheckDepositBackImage", () => {
	it("gets the check deposit back image", async () => {
		const shared = await getOrCreateSharedCheckDeposit();
		const api = buildCheckDepositsApi();

		const { data, status } = await api.getCheckDepositBackImage({
			checkDepositId: shared.id,
		});

		expect(status).toBe(200);
		expect(data).toBeDefined();
	});
});
