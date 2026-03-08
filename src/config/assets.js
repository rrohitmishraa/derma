import { getValidSubdomain } from "./subdomain";

const sub = getValidSubdomain();

let module;

try {
  module = await import(`./assets/${sub}.js`);
} catch {
  module = await import("./assets/default.js");
}

export const assets = module.assets;
