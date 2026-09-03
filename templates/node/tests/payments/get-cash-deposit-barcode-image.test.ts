import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildCashDepositBarcodeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccountContext } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getCashDepositBarcodeImage", () => {
	it("returns a barcode image", async () => {
		const ctx = await getOrCreateSharedAccountContext();
		const api = buildPaymentsApi();
		const stores = await api.listStoreLocations({ filterPostalCode: "11375" });
		if (!stores.data.data.length) return;
		const storeId = stores.data.data[0].id;
		const barcode = await api.generateCashDepositBarcode({
			generateCashDepositBarcodeRequest: buildCashDepositBarcodeRequest(
				ctx.customerId,
				ctx.accountId,
				storeId,
			),
		});
		expect(barcode.status).toBe(201);
		const barcodeNumber = barcode.data.data.attributes.barcodeNumber;

		const { status } = await api.getCashDepositBarcodeImage({ barcodeNumber });

		expect(status).toBe(200);
	});
});
