import React from "react";

export const HeaderCart = () => {
  return (
    <>
      <div className="w-3/3 mx-auto">
      <button className="   px-6 py-2 space-x-4 flex items-center text-center rounded-2xl bg-green-700 border-none cursor-pointer ">
        <span>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </span>
        <span className="font-Poppins text-white text-base lg:font-semibold">Your Cart</span>
        <span className="px-5 py-0.5 rounded-lg bg-green-600 text-white font-Poppins font-semibold  m-0  ">3</span>
      </button>
      </div>
    </>
  );
};
