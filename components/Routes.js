import Link from "next/link";
import React from "react";

const Routes = () => {
  return (
    <div className="text-center">
      <ul role="navigation" className="flex justify-between px-20 text-lg">
        <li className="hover:scale-110">
          <Link href="/">
            <a>ROPA</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>ACCESORIOS</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>ALIMENTOS</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>REGALOS</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>BONOS</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>OFERTAS</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>AGUACATES</a>
          </Link>
        </li>
        <li className="hover:scale-110">
          <Link href="/">
            <a>¿QUIENES SOMOS?</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Routes;
