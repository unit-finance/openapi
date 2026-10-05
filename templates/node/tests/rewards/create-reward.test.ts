import { describeIfToken } from "../helpers/api";
import { createRewardOrSkip } from "../helpers/rewards";

describeIfToken("RewardsApi.createReward", () => {
	it("creates a reward on the shared account", async () => {
		const reward = await createRewardOrSkip();
		if (!reward) return;

		expect(reward.type).toBe("reward");
		expect(typeof reward.id).toBe("string");
	});
});
