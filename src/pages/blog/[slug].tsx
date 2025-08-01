import { source } from "../../source.js";
import { PageProps } from "waku/router";
import { Blog } from "../../components/Blog.js";
import { Link } from "waku";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ThemeButton } from "../../components/ThemeButton.js";

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
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
            <MDX {...defaultMdxComponents} />
          </Blog>
        </article>
      </main>
      <footer
        className="border-t border-gray-200 dark:border-gray-800 mt-16"
        aria-label="Footer"
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <a
              href="https://github.com/himself65"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="text-center text-xs text-gray-400 dark:text-gray-500">
            Powered by{" "}
            <a
              href="https://waku.gg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              waku
            </a>
          </div>
        </div>
      </footer>
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
