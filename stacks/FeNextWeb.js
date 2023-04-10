import { StaticSite } from "sst/constructs";
		
export function FeNextWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "FeNextWebSite", {
		path: "fe-next-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "out",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
