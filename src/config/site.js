import { getValidSubdomain } from "./subdomain";

const sub = getValidSubdomain();

let module;

try {
  module = await import(`./sites/${sub}.js`);
} catch {
  module = await import("./sites/default.js");
}

export const siteConfig = module.siteConfig;
