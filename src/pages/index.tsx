import { Description } from "../components/Description.js";
import { ThemeButton } from "../components/ThemeButton.js";

export default function Page() {
  return (
    <main className="flex flex-row items-center w-full flex-1">
      <div className="flex flex-col items-center w-full flex-1">
        <Description />
      </div>
      <div className="self-start pt-5 sm:pt-10">
        <ThemeButton />
      </div>
    </main>
  );
}
