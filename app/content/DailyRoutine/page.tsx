import Header from "@/app/components/Header";
import Link from "next/link";
import React from "react";

const DailyRoutine = () => {
  return (
    <>
    <main>
      <Header />
      <h1 className="h1">Daily Routine</h1>
      <div className="flex justify-evenly">
        <Link className="Link" href="/">Home</Link>
        <Link className="Link" href="./DailyRoutine/Calendix">Calendix</Link>
      </div>

      <ul>
      <li>1 - Wake Up at 7.50 A.M</li>
        <li>2 - Go To Work at 9.00 A.M</li>
        <li>3 - Come Home At 6.00 P.M</li>
        <li>4 - Shower</li>
        <li>6- Work on 2024 Resolution</li>
        <li>5- Work on 2014 Resolution</li>
        <li>6- Work on 2015 Resolution</li>
        <li>6- Work on 2016 Resolution</li> 
      </ul>
      </main>
    </>
  );
};

export default DailyRoutine;
