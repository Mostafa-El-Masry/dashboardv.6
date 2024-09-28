import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <>
      <h1 className="h1">Work</h1>
      <div className="flex justify-evenly absolute left-0 top-0">
        <Link className="Link" href="/">
          Home
        </Link>
      </div>
    </>
  );
};

export default Work;
