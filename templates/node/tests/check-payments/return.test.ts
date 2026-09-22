import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import {
	getOrCreateSharedCheckPayment,
	returnOrSkip,
} from "../helpers/checkPayments";

describeIfToken("CheckPaymentsApi.returnCheckPayment", () => {
	it("returns a check payment that is still within the return window", async () => {
		const shared = await getOrCreateSharedCheckPayment();
		if (!shared) return;
		const api = buildCheckPaymentsApi();

		const returned = await returnOrSkip(api, shared.id);
		if (!returned) return;

		expect(returned.status).toBe(200);
		expect(returned.data.data.type).toBe("checkPayment");
		expect(returned.data.data.id).toBe(shared.id);
		expect(returned.data.data.attributes).toBeDefined();
	});
});
