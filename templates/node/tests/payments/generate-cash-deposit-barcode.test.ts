import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCashDepositBarcodeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.generateCashDepositBarcode", () => {
	it("generates a cash deposit barcode", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const stores = await api.listStoreLocations({ filterPostalCode: "11375" });
		expect(stores.status).toBe(200);
		if (!stores.data.data.length) return;
		const storeId = stores.data.data[0].id;

		const { data, status } = await api.generateCashDepositBarcode({
			generateCashDepositBarcodeRequest: buildCashDepositBarcodeRequest(
				ctx.customerId,
				ctx.accountId,
				storeId,
			),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("cashDepositBarcode");
		expect(data.data.attributes.barcodeNumber).toBeDefined();
	});
});
