import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import {
	clearOrSkip,
	getOrCreateSharedCheckDeposit,
} from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.clearCheckDeposit", () => {
	it("clears a check deposit that is in a clearable state", async () => {
		const api = buildCheckDepositsApi();
		const shared = await getOrCreateSharedCheckDeposit();

		// `clear` is only valid while the deposit is in `Clearing` and requires
		// the Dynamic Clearing Period feature; when the precondition is not met
		// the helper returns null and the example passes without asserting.
		const cleared = await clearOrSkip(api, shared.id);
		if (!cleared) return;
		const { data, status } = cleared;

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkDeposit");
		expect(data.data.id).toBe(shared.id);
		expect(data.data.attributes).toBeDefined();
	});
});
