import { ReactNode } from "react";
import { BlogLayout } from "../../components/BlogLayout.js";

type RootLayoutProps = { children: ReactNode; path: string };

export default async function RootLayout({ children }: RootLayoutProps) {
  return <BlogLayout>{children}</BlogLayout>;
}

export const getConfig = async () => {
  return {
    render: "static",
  };
};
