"use client";
import Link from "@/node_modules/next/link";
import { TvMinimal } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface page {
  id: number;
}

const NextJs = () => {
  const router = useRouter();
  const navigation = (page) => {
    router.push(page);
  };
  return (
    <>
      <h1 className="h1">Next JS Mastering (dashboard)</h1>
      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>
      <div className="flex justify-evenly">
        <Link className="Link" href="/content/Next-JS/HTML">
          HTML
        </Link>
        <Link className="Link" href="/content/Next-JS/CSS">
          CSS
        </Link>
        <Link className="Link" href="/content/Next-JS/JS">
          JS
        </Link>
        <button
          className="Link"
          onClick={() => navigation("/content/Next-JS/NextJSTricks")}
        >
          Next JS
        </button>
        <Link className="Link" href="/content/Next-JS/TextEditor">
          Text Editor
        </Link>
      </div>
    </>
  );
};

export default NextJs;
