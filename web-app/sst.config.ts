import type { SSTConfig } from "sst";
import { StackContext, SvelteKitSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "web-app",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }:StackContext) {
      const site = new SvelteKitSite(stack, "site");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
