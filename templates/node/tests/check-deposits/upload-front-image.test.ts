import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { createCheckDeposit, jpegImageFile } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.uploadCheckDepositFrontImage", () => {
	it("uploads the check deposit front image", async () => {
		const api = buildCheckDepositsApi();
		const created = await createCheckDeposit();

		const { data, status } = await api.uploadCheckDepositFrontImage({
			checkDepositId: created.id,
			body: jpegImageFile("front.jpg"),
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkDeposit");
		expect(data.data.id).toBe(created.id);
		expect(data.data.attributes).toBeDefined();
	});
});
