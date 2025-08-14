import { Link } from "waku";
import { source } from "../../source.js";
import { ThemeButton } from "../../components/ThemeButton.js";

import { Footer } from "../../components/Footer.js";

export default function BlogPage() {
  const pages = source.getPages().toSorted((a, b) => {
    return b.data.createdAt.getTime() - a.data.createdAt.getTime();
  });

  const formatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
    style: "long",
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-xl font-light">
      <div className="absolute top-5 right-5 sm:top-10 sm:right-10">
        <ThemeButton />
      </div>
      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-8">
          <Link
            to="/"
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
          >
            ← Back to home
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Thoughts on web development, open source, and my life.
          </p>
        </div>

        <div className="space-y-8">
          {pages.map((page) => (
            <article key={page.url} className="group">
              <Link to={page.url}>
                <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-6 py-4 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-2">
                    <time>
                      {formatter.format(
                        Math.round(
                          (page.data.createdAt.getTime() - Date.now()) /
                            1000 /
                            60 /
                            60 /
                            24,
                        ),
                        "day",
                      )}
                    </time>
                  </div>
                  <h2 className="text-xl font-semibold text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 mb-3">
                    {page.data.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {page.data.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
