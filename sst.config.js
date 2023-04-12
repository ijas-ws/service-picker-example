import dotenv from "dotenv";
import { ApiNodeHapiPg } from "./stacks/ApiNodeHapiPg";
import { FeReactWeb } from "./stacks/FeReactWeb";

dotenv.config({ path: ".env" });

export default {
	config(_input) {
		return {
			name: process.env.APP_NAME || "web-app",
			region: process.env.WEB_AWS_REGION || "ap-south-1",
		};
	},
	stacks(app) {
		// deploy stacks
		app.stack(ApiNodeHapiPg).stack(FeReactWeb);
	},
};
