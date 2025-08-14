import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod/v4";

export const docs = defineDocs({
  dir: "content/blog",
  docs: {
    schema: z.object({
      title: z.string().describe("The title of the blog post"),
      createdAt: z.date().describe("The date the blog post was created"),
      description: z.string().describe("A short description of the blog post"),
    }),
  },
});

export default defineConfig();
