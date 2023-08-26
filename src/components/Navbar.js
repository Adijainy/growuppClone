import React from "react";

const Navbar = () => {
  return (
    <div className=" mx-14 bg-white flex justify-between px-4 pb-2 pt-1 text-[#6d4078] items-center rounded-2xl shadow-xl">
      <img
        className="h-14"
        src="https://growupp.in/MAIN/growupp_official/assets/img/growwuplogo.png"
        alt="logo img"
      ></img>
      <ul className="flex">
        <li className="border-r border-gray-200 mx-1 px-6 py-2 hover:font-bold cursor-pointer">
          HOME
        </li>
        <li className="border-r border-gray-200 mx-1 px-6 py-2 hover:font-bold cursor-pointer">
          HOW WE WORK
        </li>
        <li className="border-r border-gray-200 mx-1 px-6 py-2 hover:font-bold cursor-pointer">
          ABOUT
        </li>
        <li className="border-r border-gray-200 mx-1 px-6 py-2 hover:font-bold cursor-pointer">
          CONTACT
        </li>
        <li className="px-6 mx-1">
          <button className="bg-[#FA8F14] py-2 px-5 rounded-3xl hover:font-bold">
            Sign Up
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
