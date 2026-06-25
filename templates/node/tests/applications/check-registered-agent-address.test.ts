import { buildApi, describeIfToken } from "../helpers/api";
import { buildCheckRegisteredAgentAddressRequest } from "../helpers/fixtures";

describeIfToken("ApplicationsApi.checkRegisteredAgentAddress", () => {
	it("returns whether an address is a registered agent address", async () => {
		const api = buildApi();
		const { data, status } = await api.checkRegisteredAgentAddress({
			checkRegisteredAgentAddressRequest:
				buildCheckRegisteredAgentAddressRequest(),
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkRegisteredAgentAddress");
		expect(typeof data.data.attributes.isRegisteredAgentAddress).toBe(
			"boolean",
		);
	});
});
