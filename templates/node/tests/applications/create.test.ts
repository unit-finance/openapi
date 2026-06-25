import { buildApi, describeIfToken } from "../helpers/api";
import {
	buildBusinessApplicationRequest,
	buildIndividualApplicationRequest,
	buildSoleProprietorApplicationRequest,
} from "../helpers/fixtures";

describeIfToken("ApplicationsApi.createApplication", () => {
	it("creates a Business application", async () => {
		const api = buildApi();
		const { data, status } = await api.createApplication({
			createApplicationRequest: buildBusinessApplicationRequest(),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("businessApplication");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
		expect(data.data.attributes.status).toBeDefined();
	});

	it("creates an Individual application", async () => {
		const api = buildApi();
		const { data, status } = await api.createApplication({
			createApplicationRequest: buildIndividualApplicationRequest(),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("individualApplication");
		expect(typeof data.data.id).toBe("string");
		expect(data.data.attributes).toBeDefined();
	});

	it("creates a SoleProprietor application", async () => {
		const api = buildApi();
		const { data, status } = await api.createApplication({
			createApplicationRequest: buildSoleProprietorApplicationRequest(),
		});

		expect(status).toBe(201);
		expect(data.data.type).toBe("individualApplication");
		expect(typeof data.data.id).toBe("string");
	});
});
