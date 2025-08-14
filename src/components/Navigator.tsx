import { Link } from "waku";

export const Navigator = () => {
  return (
    <nav className="flex items-center gap-6 text-sm">
      <Link
        to="/"
        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        Home
      </Link>
      <Link
        to="/blog"
        className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
      >
        Blog
      </Link>
    </nav>
  );
};
