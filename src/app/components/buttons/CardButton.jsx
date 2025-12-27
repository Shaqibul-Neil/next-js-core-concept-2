"use client";
import { CartContext } from "@/context/CartProvider";
import React, { use, useState } from "react";

const CardButton = ({ food }) => {
  const [inCart, setInCart] = useState(false);
  const { addToCart } = use(CartContext);
  const handleAddToCart = () => {
    addToCart(food);
    setInCart(true);
  };
  return (
    <button
      onClick={handleAddToCart}
      disabled={inCart}
      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm cursor-pointer disabled:bg-gray-200 disabled:text-gray-500"
    >
      {inCart ? "Added to Cart" : "Add to Cart"}
    </button>
  );
};

export default CardButton;
