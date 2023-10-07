import React from "react";
import { createPortal } from "react-dom";
import { HeaderCart } from "./HeaderCart";

export const NavBar = ({onSave}) => {
  const id = document.getElementById("nav");
  const Nav = (
    <nav className="w-full h-auto fixed top-10 bg-gray-100 z-10 ">
      <div className=" flex flex-col p-3 space-y-3">
       <ul>
       </ul>
       <HeaderCart onSave={onSave}/>
      </div>
    </nav>
  );
  return createPortal(Nav, id);
};
