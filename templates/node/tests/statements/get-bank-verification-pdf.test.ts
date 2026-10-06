import { buildStatementsApi, describeIfToken } from "../helpers/api";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("StatementsApi.getBankVerificationPdf", () => {
	it("downloads the bank verification PDF for an account", async () => {
		const { accountId } = await getOrCreateSharedAccount();

		const api = buildStatementsApi();
		const { data, status } = await api.getBankVerificationPdf({
			accountId,
			includeProofOfFunds: "false",
		});

		expect(status).toBe(200);
		expect(data).toBeDefined();
	});
});
