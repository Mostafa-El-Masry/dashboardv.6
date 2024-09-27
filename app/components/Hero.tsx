'use client';
import React, { useEffect, useState } from "react";



const Hero = () => {
  const [showLine, setShowLine] = useState(false);
  useEffect(() => {
    setShowLine(true);
  }, [])
  return (
    <>
      <section className="text-center mt-36 mb-10">
        <h1 className="text-5xl font-bold mb-10 ">
          Schedule Only{" "}
          <span className={"text-blue-600 cool-underline " +(showLine?'show-underLine':"")}>The Hard</span>
        </h1>
        <p className="text-gray-600">
          Login Schedule it and get it out of your mind.
        </p>
      </section>
    </>
  );
};

export default Hero;
