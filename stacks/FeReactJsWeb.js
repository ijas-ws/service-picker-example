import { StaticSite } from "sst/constructs";
		
export function FeReactJsWeb({ stack }) {
	// Deploy our web app
	const site = new StaticSite(stack, "FeReactJsWebSite", {
		path: "fe-react-js-web",
		buildCommand: "yarn run build:dev",
		buildOutput: "build",
	});

	// Show the URLs in the output
	stack.addOutputs({
		SiteUrl: site.url || "http://localhost:3000/",
	});
}
