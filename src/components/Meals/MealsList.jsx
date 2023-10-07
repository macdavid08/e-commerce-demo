import React from "react";
import { Input } from "../UI/Input";

export const MealsList = ({ value }) => {
  const price = `$${value.price.toFixed(2)}`;
  return (
    <>
      <div className="grid grid-cols-2 items-center justify-between bg-white rounded-md shadow-md overflow-hidden">
        <div>
          <img
            src={value.img}
            alt="Meals"
            className="w-48 h-40 object-cover object-center lg:h-40 lg:w-52 xl:h-40 xl:w-72 flex-shrink-0 "
          />
        </div>
        <div className="px-3 w-full    ">
          <h2 className=" tracking-tight text-sm md:text-base font-Poppins font-semibold uppercase text-green-700 ">
            {value.title}
          </h2>
          <p className="  text-xs font-Poppins text-slate-600 md:tracking-tight leading-4">
            {value.desc}
          </p>
          <span className="text-sm text-slate-700 font-Poppins">{price}</span>
          <div>
            <form action="#" className="flex items-center justify-between space-x-2  ">
              <Input
                label="Amount"
                input={{
                  type: "number",
                  id: "amount",
                  min: "1",
                  max: "5",
                  step: "1",
                  defaultValue: "1",
                }}
              />
              <button className=" p-1 outline-none border-2 text-green-700  border-green-700 rounded-full uppercase hover:bg-green-600 hover:border-none  active:bg-green-800 hover:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
