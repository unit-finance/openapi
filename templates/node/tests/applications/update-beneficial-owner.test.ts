import { buildApi, describeIfToken } from "../helpers/api";
import { buildUpdateBusinessBeneficialOwnerRequest } from "../helpers/fixtures";
import { getOrCreateSharedBusinessApp } from "../helpers/sharedApp";

describeIfToken("ApplicationsApi.updateBusinessBeneficialOwner", () => {
	it("PATCHes a beneficial owner of the shared business application", async () => {
		const api = buildApi();
		const shared = await getOrCreateSharedBusinessApp();

		// A Business application always carries at least one beneficial owner
		// in its `beneficialOwners` relationship, so a missing id is a real
		// failure (e.g. the envelope shape regressed), not a reason to silently
		// pass.
		expect(shared.beneficialOwnerId).toBeDefined();

		const { data, status } = await api.updateBusinessBeneficialOwner({
			id: shared.beneficialOwnerId!,
			updateBusinessBeneficialOwnerRequest:
				buildUpdateBusinessBeneficialOwnerRequest(shared.id),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("beneficialOwner");
		expect(data.data.id).toBe(shared.beneficialOwnerId);
	});
});
