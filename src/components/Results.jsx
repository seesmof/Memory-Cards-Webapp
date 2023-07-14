import React from "react";
import Logo from "/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center w-full">
        <img src={Logo} alt="logo" className="w-12 h-12 cursor-pointer" />

        <div className="flex flex-row gap-4">
          <div className="">Wins:</div>
          <div className="">Wins:</div>
          <div className="">Wins:</div>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button className="p-2 px-4 bg-green-500 font-medium rounded-md text-white duration-300 hover:bg-green-600">
            Play
          </button>
        </div>
      </div>
    </>
  );
};

const Results = () => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
    </>
  );
};

export default Results;
