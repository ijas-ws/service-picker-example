import dotenv from "dotenv";
import { Api02NodeGraphqlPg } from "./stacks/Api02NodeGraphqlPg";
import { Fe02NextJsWeb } from "./stacks/Fe02NextJsWeb";
import { Fe01ReactJsWeb } from "./stacks/Fe01ReactJsWeb";
import { Api01NodeHapiPg } from "./stacks/Api01NodeHapiPg";

dotenv.config({ path: ".env" });

export default {
	config(_input) {
		return {
			name: process.env.APP_NAME || "web-app",
			region: process.env.AWS_REGION || "ap-south-1",
		};
	},
	stacks(app) {
		// deploy stacks
		app.stack(Api02NodeGraphqlPg).stack(Fe02NextJsWeb).stack(Fe01ReactJsWeb).stack(Api01NodeHapiPg);
	},
};
