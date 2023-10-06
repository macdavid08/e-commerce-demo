import React, { useState } from "react";
import { NavBar } from "./NavBar";
import { HeaderCart } from "./HeaderCart";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <>
      <header className=" max-w-full sticky top-0 right-0 z-20 bg-green-600 px-6 py-2 flex items-center justify-between lg:p-4 xl:p-4 ">
        <h1 className="text-lg font-Poppins uppercase text-white font-semibold  lg:font-bold lg:text-2xl">
          MacFoods
        </h1>
        <div className="hidden lg:block ">
         <HeaderCart className=" flex items-center justify-between" />
        </div>
        <div className="lg:hidden" onClick={handleToggle}>
          {!toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
         {toggle ?  <NavBar toggle={handleToggle}/> : ""}
        </div>
      </header>
    </>
  );
};
