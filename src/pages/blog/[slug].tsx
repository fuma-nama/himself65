import { source } from "../../source.js";
import { PageProps } from "waku/router";
import { Blog } from "../../components/Blog.js";
import { Link, getEnv } from "waku";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ThemeButton } from "../../components/ThemeButton.js";
import { Footer } from "../../components/Footer.js";
import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
} from "../../components/mdx/HeadingComponents.js";

export default async function BlogPostPage({
  slug,
}: PageProps<"/blog/[slug]">) {
  const page = source.getPage([slug]);

  if (!page) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 dark:text-gray-400">
          The page you are looking for does not exist.
        </p>
      </div>
    );
  }

  const frontmatter = page.data;
  const MDX = page.data.default;

  const prodUrl = getEnv("VERCEL_URL");
  const ogUrl = new URL(
    `/api/og?slug=${slug}`,
    prodUrl ? "https://" + prodUrl : "http://localhost:3000",
  );
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <meta property="og:image" content={ogUrl.toString()} />
      <header
        className="border-b border-gray-200 dark:border-gray-800"
        aria-label="Header"
      >
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                Alex Yang
              </h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-900 dark:text-gray-100 font-medium hover:text-gray-600 dark:hover:text-gray-300"
              >
                Home
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeButton />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8" aria-label="Main content">
        <article className="prose prose-lg prose-gray dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {frontmatter.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {frontmatter.description}
          </p>
          <Blog>
            <MDX
              {...defaultMdxComponents}
              components={{
                ...defaultMdxComponents,
                h1: H1,
                h2: H2,
                h3: H3,
                h4: H4,
                h5: H5,
                h6: H6,
              }}
            />
          </Blog>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export async function getConfig() {
  const pages = source.getPages().map((page) => page.slugs);

  return {
    render: "static" as const,
    staticPaths: pages,
  } as const;
}
