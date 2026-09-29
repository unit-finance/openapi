import { buildLendingProgramsApi, describeIfToken } from "../helpers/api";
import { getFirstLendingProgramIdOrSkip } from "../helpers/lendingPrograms";

describeIfToken("LendingProgramsApi.getLendingProgramById", () => {
	it("reads a single lending program resource", async () => {
		const api = buildLendingProgramsApi();
		const id = await getFirstLendingProgramIdOrSkip();
		if (!id) return;

		const { data, status } = await api.getLendingProgramById({ id });

		expect(status).toBe(200);
		expect(data.data.id).toBe(id);
		expect(typeof data.data.type).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(typeof data.data.attributes.name).toBe("string");
		expect(typeof data.data.attributes.programSizeLimit).toBe("number");
	});
});
