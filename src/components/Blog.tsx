"use client";
// nit: have to wrap this component in a client component, otherwise the Context will be not found in client side rendering.
import type { PropsWithChildren } from "react";

export const Blog = ({ children }: PropsWithChildren) => {
  return children;
};
