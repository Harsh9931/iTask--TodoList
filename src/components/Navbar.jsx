import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between bg-emerald-500 text-white py-5">
        <div className="logo">
            <span className="font-bold  mx-4 hover:font-extrabold cursor-pointer transition-all">iTask</span>
        </div>
        <ul className="flex gap-8 mx-9">
          <li className="cursor-pointer hover:font-bold transition-all ">Home </li>
          <li className="cursor-pointer hover:font-bold transition-all ">About</li>
          <li className="cursor-pointer hover:font-bold transition-all ">Contact us</li>
          </ul>
      </nav>
    </div>
  );
};

export default Navbar;
