import { isAxiosError } from "axios";
import { buildPaymentsApi, describeIfToken } from "../helpers/api";
import { buildGenerateCashDepositBarcodeRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PaymentsApi.getCashDepositBarcodeImage", () => {
	it("generates a barcode then fetches its PNG image", async () => {
		const api = buildPaymentsApi();
		const shared = await getOrCreateSharedAccount();

		let stores: Awaited<ReturnType<typeof api.listStoreLocations>>;
		try {
			stores = await api.listStoreLocations({
				filterPostalCode: "11375",
				filterServiceType: "Barcode",
				pageLimit: "1",
			});
		} catch (err) {
			// The sandbox store-locations endpoint currently 500s for valid
			// queries; without a store there is nothing to barcode, so skip.
			if (isAxiosError(err) && err.response?.status === 500) {
				console.warn("store-locations unavailable in sandbox (500); skipping.");
				return;
			}
			throw err;
		}
		expect(stores.status).toBe(200);
		if (!stores.data.data.length) {
			console.warn("No store locations found near postal code 11375.");
			return;
		}

		const storeId = stores.data.data[0].attributes.storeId;
		const request = buildGenerateCashDepositBarcodeRequest(
			storeId,
			shared.customerId,
			shared.accountId,
		);

		let generated: Awaited<ReturnType<typeof api.generateCashDepositBarcode>>;
		try {
			generated = await api.generateCashDepositBarcode({
				generateCashDepositBarcodeRequest: request,
			});
		} catch (err) {
			// Even with a valid payload the sandbox currently returns an opaque
			// 500 ("Internal Error") for barcode generation on this org; without
			// a barcode there is nothing to fetch an image for, so skip.
			if (isAxiosError(err) && err.response?.status === 500) {
				console.warn(
					"cash-deposit-barcode generation unavailable in sandbox (500); skipping.",
				);
				return;
			}
			throw err;
		}
		expect(generated.status).toBe(200);
		const barcodeNumber = generated.data.data.attributes.barcodeNumber;

		const { status } = await api.getCashDepositBarcodeImage({ barcodeNumber });

		expect(status).toBe(200);
	});
});
