import Link from "next/link";
import React from "react";

const CSSRefrencePage = () => {
  return (
    <>
      <h1 className="h1">CSS &amp; Tailwind Refrence Page</h1>
      <Link className="Link" href="/content/Next-JS">
        Back
      </Link>
      <h2>Tricks</h2>
      <ul>
        <li>
          Steal the images you like online by use inspect and copying the image
          Links
        </li>
      </ul>
    </>
  );
};

export default CSSRefrencePage;
