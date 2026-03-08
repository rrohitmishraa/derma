export function getValidSubdomain() {
  const host = window.location.hostname;
  const sub = host.split(".")[0];

  // these should not be treated as doctor sites
  const invalid = ["www", "unlinkly", "localhost"];

  if (!sub || invalid.includes(sub)) {
    return "default";
  }

  return sub;
}
