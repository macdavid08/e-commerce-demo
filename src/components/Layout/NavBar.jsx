import React from "react";
import { createPortal } from "react-dom";
import { HeaderCart } from "./HeaderCart";

export const NavBar = () => {
  const id = document.getElementById("nav");
  const Nav = (
    <nav className="w-full h-auto fixed top-10 bg-gray-100 z-10 ">
      <div className=" flex flex-col p-3 space-y-3">
       <ul>
        <li>Cart</li>
        <li>Cart</li>
        
       </ul>
       <HeaderCart/>
      </div>
    </nav>
  );
  return createPortal(Nav, id);
};
