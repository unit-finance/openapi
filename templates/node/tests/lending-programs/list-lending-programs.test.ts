import { buildLendingProgramsApi, describeIfToken } from "../helpers/api";

describeIfToken("LendingProgramsApi.listLendingPrograms", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildLendingProgramsApi();

		const { data, status } = await api.listLendingPrograms({
			pageLimit: "20",
		});

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const program of data.data) {
			expect(typeof program.id).toBe("string");
			// The program `type` is open-ended in the spec (e.g.
			// `receivablesRetentionProgram`, `clientSponsoredChargeCardProgram`),
			// so assert it is present rather than pinning a literal.
			expect(typeof program.type).toBe("string");
			expect(program.attributes).toBeDefined();
			expect(typeof program.attributes.name).toBe("string");
		}
	});
});
