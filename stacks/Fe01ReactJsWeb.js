import { StaticSite } from "sst/constructs";
		
export function Fe01ReactJsWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "Fe01ReactJsWebSite", {
		path: "fe01-react-js-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "build",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
