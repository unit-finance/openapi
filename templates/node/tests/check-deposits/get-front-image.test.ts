import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckDeposit } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.getCheckDepositFrontImage", () => {
	it("gets the check deposit front image", async () => {
		const shared = await getOrCreateSharedCheckDeposit();
		const api = buildCheckDepositsApi();

		const { data, status } = await api.getCheckDepositFrontImage({
			checkDepositId: shared.id,
		});

		expect(status).toBe(200);
		expect(data).toBeDefined();
	});
});
