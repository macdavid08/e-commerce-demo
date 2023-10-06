import React from "react";
import food from "../../assests/mixed-food.jpg";
import { MealsData } from "../Meals/MealsData";

export const Hero = () => {
  return (
    <>
      <section className="max-w-full bg-white font-Montserrat ">
        <div className=" hidden md:grid md:grid-cols-3 lg:grid-cols-5">
          <div className="px-6 py-2  lg:mt-12 xl:mt-14   2xl:mt-16 lg:col-span-2 leading-7 tracking-normal md:col-span-1 ">
            <h1 className="font-bold text-green-800 text-4xl  py-2 md:text-2xl md:tracking-tight lg:text-3xl xl:text-4xl  ">Delicious Food, <br /><span className="text-slate-800"> Delivered To You</span></h1>
           <div className="text-base lg:text-lg xl:text-xl  space-y-3 tracking-tight text-slate-700 md:text-md md:space-y-2">
           <p>
             Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
            </p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
           </div>
          </div>
          <div className="lg:col-span-3 md:col-span-2">
            <img
              src={food}
              alt="Table Food"
              className="w-full 2xl:h-2/3 lg:h-96 object-cover object-center"
            />
          </div>
        </div>
        <div className="md:hidden lg:hidden grid grid-rows-2 ">
          <div className=" overflow-hidden flex-shrink-0  ">
            <img
              src={food}
              alt="Table Food"
              className="w-full h-full object-cover object-center "
            />
          </div>
          <div className="px-4 py-2  ">
          <h1 className="font-bold text-green-800  text-2xl text-center  ">Delicious Food, <br/> <span className="text-slate-800">Delivered To You</span></h1>
           <div className="text-sm tracking-tight  box-content space-y-2 text-slate-700">
           <p>
             Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
            </p>
            <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
           </div>
          </div>
        </div>
        <MealsData />
      </section>
    </>
  );
};
