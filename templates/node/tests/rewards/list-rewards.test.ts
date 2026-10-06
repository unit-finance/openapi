import { buildRewardsApi, describeIfToken } from "../helpers/api";

describeIfToken("RewardsApi.listRewards", () => {
	it("returns a JSON:API list with pageLimit=20", async () => {
		const api = buildRewardsApi();

		const { data, status } = await api.listRewards({ pageLimit: "20" });

		expect(status).toBe(200);
		expect(Array.isArray(data.data)).toBe(true);
		expect(data.data.length).toBeLessThanOrEqual(20);
		for (const reward of data.data) {
			expect(typeof reward.id).toBe("string");
			expect(reward.type).toBe("reward");
			expect(reward.attributes).toBeDefined();
		}
	});
});
