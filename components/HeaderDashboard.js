import React from "react";
import { SearchIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Routes from "./Routes";

const HeaderDashboard = () => {
  return (
    <div className="bg-white h-[185px]">
      <div className="flex justify-between items-center py-4 h-4/5">
        <div className="pl-20">
          <SearchIcon className="h-9 w-9 text-black hover:scale-110 cursor-pointer" />
        </div>
        <div>
          <Image
            src="/main-logo.jpeg"
            alt="main-logo"
            width={199}
            height={67.2}
          />
        </div>
        <div className="pr-20">
          <UserIcon className="h-9 w-9 text-black hover:scale-110 cursor-pointer" />
        </div>
      </div>
      <Routes />
    </div>
  );
};

export default HeaderDashboard;
