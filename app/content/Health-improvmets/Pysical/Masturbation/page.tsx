import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Masturbation = () => {
  return (
    <>
      <h1 className="h1">Masturbation</h1>
      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>
      <p>This requires React knowledge that i don&#39;t have yet</p>
    </>
  );
};

export default Masturbation;
