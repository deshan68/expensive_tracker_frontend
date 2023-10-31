import React from "react";

const Navbar = () => {
  return (
    <div className="h-[8vh] flex justify-between px-4 items-center border-b-[0.5px] border-gray-400 text-sm ">
      <span>Dashboard</span>
      <span>Akilapremarathne@gmail.com</span>
      <span className="cursor-pointer bg-[#1E5DFE] text-white px-4 py-2 rounded-md">
        Sign out
      </span>
    </div>
  );
};

export default Navbar;
