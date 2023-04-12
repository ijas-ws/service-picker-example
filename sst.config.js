import dotenv from "dotenv";
import { FeNextWeb } from "./stacks/FeNextWeb";
import { ApiNodeGraphqlMysql } from "./stacks/ApiNodeGraphqlMysql";

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
		app.stack(FeNextWeb).stack(ApiNodeGraphqlMysql);
	},
};
