import { defineConfig } from "waku/config";
import mdx from "fumadocs-mdx/vite";
import * as MdxConfig from "./source.config.js";
import { Plugin } from "vite";
import { readFile } from "node:fs/promises";
import tailwind from"@tailwindcss/vite"

const hexLoader: Plugin = {
  name: "hex-loader",
  async transform(code, id) {
    const [path, query] = id.split("?") as [string, string | undefined];
    if (query != "raw-hex") return code;

    const data = await readFile(path);
    const hex = data.toString("hex");

    return `export default '${hex}';`;
  },
};

export default defineConfig({
  vite: {
    plugins: [mdx(MdxConfig), hexLoader, tailwind()],
  },
});
