import { isAxiosError } from "axios";
import { buildCardsAtmLocationsApi, describeIfToken } from "../helpers/api";

describeIfToken("CardsATMLocationsApi.listAtmLocations", () => {
	it("returns ATM locations near a postal code", async () => {
		const api = buildCardsAtmLocationsApi();
		try {
			const { data, status } = await api.listAtmLocations({
				filterPostalCode: "11375",
			});

			expect(status).toBe(200);
			expect(Array.isArray(data.data)).toBe(true);
		} catch (err) {
			// Mirror store-locations: a valid postal-code query can 500 when the
			// ATM-locator feature is off for this org.
			if (isAxiosError(err) && err.response?.status === 500) {
				console.warn("atm-locations unavailable in sandbox (500); skipping.");
				return;
			}
			throw err;
		}
	});
});
