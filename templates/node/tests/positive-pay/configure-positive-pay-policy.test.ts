import { buildPositivePayApi, describeIfToken } from "../helpers/api";
import { buildConfigurePositivePayPolicyRequest } from "../helpers/fixtures";
import { getOrCreateSharedAccount } from "../helpers/sharedAccount";

describeIfToken("PositivePayApi.configurePositivePayPolicy", () => {
	// Skipped: the sandbox does not route `POST /positive-pay-policy` at all. It
	// answers every request — including a spec-valid one — with 404 "Please
	// check the path, we don't serve any resource at the specified path", so the
	// operation exists only in the spec. Re-enable (`it.skip` -> `it`) once the
	// sandbox serves the path, or once `unit-openapi` drops the operation.
	it.skip("opts an account in to check-payment positive pay", async () => {
		const api = buildPositivePayApi();
		const { accountId } = await getOrCreateSharedAccount();

		const { status } = await api.configurePositivePayPolicy({
			configurePositivePayPolicyRequest:
				buildConfigurePositivePayPolicyRequest(accountId),
		});

		expect([200, 201]).toContain(status);
	});
});
