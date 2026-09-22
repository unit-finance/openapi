import { buildCheckPaymentsApi, describeIfToken } from "../helpers/api";
import {
	getCheckImageOrSkip,
	getOrCreateSharedCheckPayment,
} from "../helpers/checkPayments";

describeIfToken("CheckPaymentsApi.getCheckImage", () => {
	it("gets a printed front image when the check has been produced", async () => {
		const shared = await getOrCreateSharedCheckPayment();
		if (!shared) return;
		const api = buildCheckPaymentsApi();

		const image = await getCheckImageOrSkip(api, shared.id);
		if (!image) return;

		expect(image.status).toBe(200);
		expect(image.data).toBeDefined();
	});
});
