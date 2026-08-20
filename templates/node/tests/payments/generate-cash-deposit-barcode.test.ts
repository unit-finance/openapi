import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildGenerateCashDepositBarcodeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.generateCashDepositBarcode", () => {
	it("generates a cash deposit barcode when a store location exists", async () => {
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

		const { data, status } = await api.generateCashDepositBarcode({
			generateCashDepositBarcodeRequest: request,
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("cashDepositBarcode");
		expect(typeof data.data.attributes.barcodeNumber).toBe("string");
	});
});
