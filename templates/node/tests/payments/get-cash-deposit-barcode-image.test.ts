import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildGenerateCashDepositBarcodeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getCashDepositBarcodeImage", () => {
	it("generates a barcode then fetches its PNG image", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		const stores = await api.listStoreLocations({
			filterPostalCode: "11375",
			pageLimit: "1",
		});
		expect(stores.status).toBe(200);
		if (!stores.data.data.length) {
			test.skip("No store locations found near postal code 11375.");
			return;
		}

		const storeId = stores.data.data[0].attributes.storeId;
		const request = buildGenerateCashDepositBarcodeRequest(
			storeId,
			shared.customerId,
			shared.accountId,
		);

		const generated = await api.generateCashDepositBarcode({
			generateCashDepositBarcodeRequest: request,
		});
		expect(generated.status).toBe(200);
		const barcodeNumber = generated.data.data.attributes.barcodeNumber;

		const { status } = await api.getCashDepositBarcodeImage({ barcodeNumber });

		expect(status).toBe(200);
	});
});
