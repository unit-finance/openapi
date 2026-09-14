import { buildCheckDepositsApi, describeIfToken } from "../helpers/api";
import { createCheckDeposit, jpegImageFile } from "../helpers/checkDeposits";

describeIfToken("CheckDepositsApi.uploadCheckDepositBackImage", () => {
	it("uploads the check deposit back image", async () => {
		const api = buildCheckDepositsApi();
		const created = await createCheckDeposit();
		// The back image can only be uploaded once the front image is present.
		await api.uploadCheckDepositFrontImage({
			checkDepositId: created.id,
			body: jpegImageFile("front.jpg"),
		});

		const { data, status } = await api.uploadCheckDepositBackImage({
			checkDepositId: created.id,
			body: jpegImageFile("back.jpg"),
		});

		expect(status).toBe(200);
		expect(data.data.type).toBe("checkDeposit");
		expect(data.data.id).toBe(created.id);
		expect(data.data.attributes).toBeDefined();
	});
});
