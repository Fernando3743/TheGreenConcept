import React from "react";

const Header = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-10 bg-transparent text-white bourton-font">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-semibold">Logo</span>
          <div className="flex space-x-4 ">
            <a href="#">Dashboard</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
