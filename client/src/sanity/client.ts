import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "amx7wkdr",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

// Export for easy image URL handling
export { default as imageUrlBuilder } from "@sanity/image-url";