import React from "react";
// import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({drawerOpen, toggleCartDrawer}) => {
    return (
    <div
    className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transition-all duration-300 z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      } ${drawerOpen ? "" : "pointer-events-none"} flex flex-col`}
      
    >
        {/* {Close Button} */}
        <div className="flex justify-end p-4">
            <button onClick={toggleCartDrawer}>
                <IoMdClose className="h-6 w-6 text-gray-600"/>
            </button>
        </div>
        {/* Cart contents with scrollabe area */}
        <div className="flex-grow p-4 overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            {/* {Component for Cart Contents} */}
            <CartContents/>
        </div>
        {/* CheckOut button fixed at BOTTOM */}
        <div className="p-4 bg-white sticky bottom-0">
            <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
                Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping, taxes, and discount codes calulated at checkout.</p>
        </div>
    </div>
  );
};

export default CartDrawer;
