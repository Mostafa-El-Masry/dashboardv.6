import Link from "next/link";
import React from "react";


const HomePage = () => {
  return (
    <main className="container">
      <div className="flex text-center h-screen capitalize ">
        <div className="flex flex-col justify-evenly w-full   ">
          <div className="Link justify-center self-center w-1/3 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            547 - A year (Vication) goals calender
          </div>
          <div className="flex md:flex-row max-sm:flex-col xs:flex-col content-evenly justify-evenly">
            <div className="Link">
              <Link href="./content/work"> Work Any Thing</Link>
            </div>
            <div className="Link">
              <Link href="./content/Next-JS">
                {" "}
                Next JS Mastering (dashboard)
              </Link>
            </div>
            <div className="Link">
              <Link href="./content/Stable-living-situation">
                {" "}
                Stable living situation
              </Link>
            </div>
            <div className="Link">
              <Link href="./content/Apollo">
                {" "}
                Apollo
              </Link>
            </div>
            <div className="Link">
              <Link href="./content/Pressue-dreams"> Pressue dreams</Link>
            </div>
            <div className="Link">
              <Link href="./content/Health-improvmets"> health improvmets</Link>
            </div>
          </div>
          <div className="Link justify-center self-center w-1/3 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            <Link href="./content/DailyRoutine">Daily Routine</Link>
          </div>
          <div className="Link justify-center self-center w-1/3 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
            GET MARRIED
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
