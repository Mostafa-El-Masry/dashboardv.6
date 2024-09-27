import { TvMinimal } from "lucide-react";
import Link from "next/link";

const inventorymanagment = () => {
  return (
    <>
      <main>
        <h1 className="h1">Inventory Managment</h1>
        <div className="flex justify-evenly">
          <Link className="Home" href="/">
            <TvMinimal color="#13547a" />
          </Link>
        </div>
      </main>
    </>
  );
};

export default inventorymanagment;
