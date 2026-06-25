import type { Config } from "jest";

const config: Config = {
	preset: "ts-jest",
	testEnvironment: "node",
	testTimeout: 60000,
	testMatch: ["**/*.test.ts"],
	setupFiles: ["dotenv/config"],
	verbose: true,
};

export default config;
