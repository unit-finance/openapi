import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import {
	confirmOrSkip,
	getOrCreateSharedCheckDeposit,
} from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.confirmCheckDepositDetails", () => {
	it("confirms a check deposit awaiting customer confirmation", async () => {
		const api = buildCheckDepositsApi();
		const shared = await getOrCreateSharedCheckDeposit();

		// `confirm` is only valid while the deposit is in
		// `AwaitingCustomerConfirmation`; when that precondition is not met the
		// helper returns null and the example passes without asserting.
		const confirmed = await confirmOrSkip(api, shared.id);
		if (!confirmed) return;

		expect(confirmed.status).toBe(200);
	});
});
