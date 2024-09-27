import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Healthimprovmets = () => {
  return (
    <>
      <h1 className="h1">Health improvmets</h1>

      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>

      <Link href="/content/Health-improvmets/Mental">Mental Health</Link>
      <Link href="/content/Health-improvmets/Pysical">Pysical Health</Link>
    </>
  );
};

export default Healthimprovmets;
