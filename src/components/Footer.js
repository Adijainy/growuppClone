import React from "react";

const Footer = () => {
  return (
    <div className="mx-28 bg-gradient-to-b from-[#f4d7ae] to-white rounded-2xl shadow-[#27262466] drop-shadow-2xl shadow-lg mt-14 mb-4 px-4 py-1 text-[#6d4078]">
      <ul className="flex font-bold ">
        <li className="px-32 border-r border-[#6d4078] justify-center">
          <img
            className="h-7 ml-6"
            src="https://growupp.in/MAIN/growupp_official/assets/img/discover.png"
            alt="discocer"
          />
          DISCOVER
        </li>
        <li className="px-32 border-r border-[#6d4078]">
          <img
            className="h-7 ml-3"
            src="https://growupp.in/MAIN/growupp_official/assets/img/book.png"
            alt="discocer"
          />
          LEARN
        </li>
        <li className="px-32 border-r border-[#6d4078]">
          <img
            className="h-7 ml-2"
            src="https://growupp.in/MAIN/growupp_official/assets/img/clipboard.png"
            alt="discocer"
          />
          APPLY
        </li>
        <li className="px-32">
          <img
            className="h-7 ml-2"
            src="https://growupp.in/MAIN/growupp_official/assets/img/growing.png"
            alt="discocer"
          />
          GROW
        </li>
      </ul>
    </div>
  );
};

export default Footer;
