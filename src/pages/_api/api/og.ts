import { generate } from "../../../components/OG.js";
import { source } from "../../../source.js";
import satori from "satori";
import { parse } from "opentype.js";
// @ts-expect-error
import ttf from "../../../fonts/roboto-v30-latin-300.ttf?raw-hex";
// @ts-expect-error
import notoSansSCOtf from "../../../fonts/NotoSansSC-Light.otf?raw-hex";
const { buffer } = Buffer.from(ttf, "hex");
const { buffer: notoSansSCBuffer } = Buffer.from(notoSansSCOtf, "hex");

export async function GET(request: Request) {
  const url = request.url;
  const { searchParams } = new URL(url);
  const slugs = (searchParams.get("slug") || "")
    .split("/")
    .filter((s) => s.length > 0);
  const page = source.getPage(slugs);
  if (!page) return new Response("Page not found", { status: 404 });
  try {
    const svg = await satori(
      generate({
        title: page.data.title,
        description: page.data.description,
        site: "Alex's blog",
      }),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Roboto",
            data: parse(buffer).toArrayBuffer(),
            weight: 300,
            style: "normal",
          },
          {
            name: "Noto Sans SC",
            data: notoSansSCBuffer,
            weight: 300,
            style: "normal",
          },
        ],
      },
    );

    return new Response(svg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error generating OG image:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
