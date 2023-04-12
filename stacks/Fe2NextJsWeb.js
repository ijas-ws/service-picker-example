import { StaticSite } from "sst/constructs";
		
export function Fe2NextJsWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "Fe2NextJsWebSite", {
		path: "fe2-next-js-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "out",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
