import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const JSRefrence = () => {
  return (
    <>
      {" "}
      <h1 className="h1">JS Refrence Page</h1>
      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>
      <h2 className="flex w-5/6 h-32 items-center justify-center text-4xl">
        Display Area
      </h2>
    </>
  );
};

export default JSRefrence;