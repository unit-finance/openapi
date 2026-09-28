import { buildLendingProgramsApi, describeIfToken } from "../helpers/api";
import { getFirstLendingProgramIdOrSkip } from "../helpers/lendingPrograms";

describeIfToken(
	"LendingProgramsApi.getLendingProgramExtendedInformationById",
	() => {
		it("reads the extended information for a lending program", async () => {
			const api = buildLendingProgramsApi();
			const id = await getFirstLendingProgramIdOrSkip();
			if (!id) return;

			const { data, status } =
				await api.getLendingProgramExtendedInformationById({ id });

			expect(status).toBe(200);
			expect(data.data.id).toBe(id);
			expect(data.data.type).toBe("lendingProgramExtendedInformation");
			expect(data.data.attributes).toBeDefined();
		});
	},
);
