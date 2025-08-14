"use client";

import React from "react";
import { Link } from "lucide-react";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h1 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-5 h-5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h1>
  );
}

export function H2({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h2 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-4 h-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h2>
  );
}

export function H3({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h3 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-7 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h3>
  );
}

export function H4({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h4 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-3 h-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h4>
  );
}

export function H5({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h5 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-3 h-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h5>
  );
}

export function H6({ children, className = "" }: HeadingProps) {
  const text = React.Children.toArray(children).join("");
  const id = slugify(text);

  return (
    <h6 id={id} className={`group relative scroll-mt-20 ${className}`}>
      <a
        href={`#${id}`}
        className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label={`Link to ${text}`}
      >
        <Link className="w-3 h-3 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300" />
      </a>
      {children}
    </h6>
  );
}
