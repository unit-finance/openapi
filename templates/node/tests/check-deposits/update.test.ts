import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedCheckDeposit } from "../helpers/checkDeposits";
import { buildUpdateCheckDepositRequest } from "../helpers/fixtures";

describeIfToken("CheckDepositsApi.updateCheckDeposit", () => {
	it("updates a check deposit's tags", async () => {
		const shared = await getOrCreateSharedCheckDeposit();
		const api = buildCheckDepositsApi();

		const { data, status } = await api.updateCheckDeposit({
			checkDepositId: shared.id,
			updateCheckDepositRequest: buildUpdateCheckDepositRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkDeposit");
		expect(data.data.id).toBe(shared.id);
		expect(data.data.attributes).toBeDefined();
	});
});
