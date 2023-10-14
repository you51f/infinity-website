import { client } from "@/app/lib/client";
import "server-only";

const DEFAULT_PARAMS = {};
const DEFAULT_TAGS = [];

export const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

export async function sanityFetch(query, params = DEFAULT_PARAMS, tags = DEFAULT_TAGS) {
  // const isDraftMode = draftMode().isEnabled;
  if (!token) {
    throw new Error(
      "The `SANITY_API_READ_TOKEN` environment variable is required."
    );
  }
  const isDevelopment = process.env.NODE_ENV === "development";

  return client
    .withConfig({ useCdn: true })
    .fetch(query, params, {
      cache: isDevelopment || isDraftMode ? undefined : "force-cache",
      ...({
        token: token,
        perspective: "previewDrafts",
      }),
      next: {
        ...({ revalidate: 30 }),
        tags,
      },
    });
}
