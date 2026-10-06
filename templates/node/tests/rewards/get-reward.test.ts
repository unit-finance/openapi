import { buildRewardsApi, describeIfToken } from "../helpers/api";
import { getRewardId } from "../helpers/rewards";

describeIfToken("RewardsApi.getReward", () => {
	it("fetches a reward by id", async () => {
		const rewardId = await getRewardId();
		if (!rewardId) return;

		const api = buildRewardsApi();
		const { data, status } = await api.getReward({ rewardId });

		expect(status).toBe(200);
		expect(data.data.id).toBe(rewardId);
		expect(data.data.type).toBe("reward");
		expect(data.data.attributes).toBeDefined();
	});
});
