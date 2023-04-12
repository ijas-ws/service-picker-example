import { StaticSite } from "sst/constructs";
		
export function Fe02NextJsWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "Fe02NextJsWebSite", {
		path: "fe02-next-js-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "out",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
