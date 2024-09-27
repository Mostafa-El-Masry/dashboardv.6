import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Apollo = () => {
  return (
    <>
      <main className="container justify-evenly w-full">
        <h1 className="h1">Apollo</h1>
        <Link className="Home" href="/">
          <TvMinimal color="#13547a" />
        </Link>
        <Link className="Link" href="/content/Apollo/Adultery">
          Adultery
        </Link>
      </main>
    </>
  );
};

export default Apollo;
