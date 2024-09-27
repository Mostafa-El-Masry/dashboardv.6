import { TvMinimal } from "lucide-react";
import Link from "next/link";
import React from "react";

const notfound = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <Link className="Home absolute top-2/4 left-0" href="/">
          <TvMinimal size={64} color="#13547a" />
        </Link>
      </div>
    </>
  );
};

export default notfound;
