import Link from "next/link";
import React from "react";

const TextEditor = () => {
  return (
    <>
      <h1 className="h1">Text Editor</h1>
      <Link className='Link' href="/content/Next-JS">Back</Link>
      <h2>Visual Studio Code</h2>
      <h3>Extensions</h3>
      <ul>
        <li>ES7+ React/Redux/React-Native snippets</li>
        <li>HTML Entity Converter</li>
        <li>Live Server</li>
        <li>Prettier - Code formatter</li>
        <li>Tailwind CSS IntelliSense</li>
        <li>auto rename tag</li>
        <li>auto close tag</li>
      </ul>
    </>
  );
};

export default TextEditor;
