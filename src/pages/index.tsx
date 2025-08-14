import { Description } from "../components/Description.js";
import { ThemeButton } from "../components/ThemeButton.js";
import { Navigator } from "../components/Navigator.js";
import { Footer } from "../components/Footer.js";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-start px-5 bg-white dark:bg-gray-900 text-xl font-light dark:text-gray-300">
      <header className="w-full flex justify-between items-center py-5 sm:py-10 px-0 sm:px-10 lg:px-40">
        <div className="flex items-center gap-8">
          <h1 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Alex Yang
          </h1>
          <Navigator />
        </div>
        <ThemeButton />
      </header>
      <main className="flex flex-row items-center w-full flex-1">
        <Description />
      </main>
      <Footer />
    </div>
  );
}
