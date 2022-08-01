import React from "react";

const RoundedButton = ({ label }) => {
  return (
    <a
      href=""
      className="bg-[#37937d] w-auto mt-3 mr-6 px-6 py-3 rounded-[100vw] text-white text-lg tracking-widest font-['Koulen']"
    >
      {label}
    </a>
  );
};

export default RoundedButton;
