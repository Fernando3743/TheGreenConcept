import Image from "next/image";
import React from "react";
import Announcement from "./Announcement";
import HeaderDashboard from "./HeaderDashboard";
import Routes from "./Routes";

const Header = () => {
  return (
    <header>
      <Announcement />
      <HeaderDashboard />
    </header>
  );
};

export default Header;
