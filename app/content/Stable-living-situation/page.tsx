import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Stablelivingsituation = () => {
  return (
    <>
      <h1 className="h1">Stable living situation</h1>
      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>
      <Link className="Link" href="/content/Stable-living-situation/Finances">
        Finances
      </Link>
    </>
  );
};

export default Stablelivingsituation;
