import { Description } from "../components/Description.js";
import { ThemeButton } from "../components/ThemeButton.js";
import { Banner } from "../components/Banner.js";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-start px-5 bg-white dark:bg-gray-900 text-xl font-light dark:text-gray-300">
      <main className="flex flex-row items-center w-full flex-1">
        <div className="flex flex-col items-center w-full flex-1">
          <Description />
        </div>
        <div className="self-start pt-5 sm:pt-10">
          <ThemeButton />
        </div>
      </main>
      <Banner />
    </div>
  );
}
