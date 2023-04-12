import dotenv from "dotenv";
import { Api2NodeGraphqlMysql } from "./stacks/Api2NodeGraphqlMysql";
import { FeReactJsWeb } from "./stacks/FeReactJsWeb";
import { ApiNodeHapiPg } from "./stacks/ApiNodeHapiPg";
import { Fe2NextJsWeb } from "./stacks/Fe2NextJsWeb";

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
		app.stack(Api2NodeGraphqlMysql).stack(FeReactJsWeb).stack(ApiNodeHapiPg).stack(Fe2NextJsWeb);
	},
};
