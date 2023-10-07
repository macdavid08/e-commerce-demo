import React from "react";
import { ErrorModal } from "../UI/ErrorModal";
import { Button } from "../UI/Button";

const DummyCart = [{ id: 1, title: "Meat Burger", amount: 2,  price: 5.5 }];

export const Cart = ({onSave}) => {
  const cartList = DummyCart.map((data) => {
    return (
      <ul>
        <li>{data.title}</li>
      </ul>
    );
  });
  return (
    <ErrorModal onSave={onSave}>
      {cartList}
      <div>
        <div className="flex items-center justify-between py-4 font-semibold md:font-bold md:text-lg xl:text-xl font-Montserrat ">
          <span>Total Amount</span>
          <span>75.00</span>
        </div>
        <div className="flex items-center justify-end space-x-4">
          <button  className="px-6 py-2 text-slate-700 border-2 border-green-600 outline-none rounded-full hover:bg-green-600 hover:text-white active:bg-green-800 hover:border-none  uppercase font-Poppins font-semibold  text-right cursor-pointer" onClick={onSave}>Close</button>
          <Button >
            Order
          </Button>
          
        </div>
      </div>
    </ErrorModal>
  );
};
