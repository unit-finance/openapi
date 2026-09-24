import { describeIfToken } from "../helpers/api";
import { createCreditApplicationOrSkip } from "../helpers/credit";

describeIfToken("CreditApplicationsApi.createCreditApplication", () => {
	it("creates a credit application for an existing customer", async () => {
		// Needs a real `lendingProgram` id, and this SDK surface has no
		// list-lending-programs operation; the helper borrows one off an
		// existing credit application and skips when the org has none.
		const created = await createCreditApplicationOrSkip();
		if (!created) return;
		const { data, status } = created;

		expect(status).toBe(201);
		expect(typeof data.data.id).toBe("string");
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});
});
