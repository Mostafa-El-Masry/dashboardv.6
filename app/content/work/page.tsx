import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <>
      <h1 className="h1">Work</h1>
      <Link className="Home" href="/">
        <TvMinimal color="#13547a" />
      </Link>
      <Link className="Link" href="work/inventory-managment">
        Inventory Managment
      </Link>
    </>
  );
};

export default Work;
