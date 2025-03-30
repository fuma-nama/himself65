import "../style.css";

import { ReactNode } from "react";

import { Banner } from "../components/Banner.js";
import { Layout } from "../components/Layout.js";

type RootLayoutProps = { children: ReactNode; path: string };

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html>
      <head>
        <title>Himself65</title>
      </head>
      <body>
        <Layout>
          <div className="flex min-h-screen flex-col items-start px-5 bg-white dark:bg-gray-900 text-xl font-light dark:text-gray-300">
            {children}
            <Banner />
          </div>
        </Layout>
      </body>
    </html>
  );
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
