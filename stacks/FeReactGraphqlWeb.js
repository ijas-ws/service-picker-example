import { StaticSite } from "sst/constructs";
		
export function FeReactGraphqlWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "FeReactGraphqlWebSite", {
		path: "fe-react-graphql-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
