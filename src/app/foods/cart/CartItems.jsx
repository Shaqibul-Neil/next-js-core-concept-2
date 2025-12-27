"use client";

import { CartContext } from "@/context/CartProvider";
import React, { use } from "react";

const CartItems = () => {
  const { cart } = use(CartContext);
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">{cart.length} items Added</h2>
      <div>
        {cart.map((c) => (
          <h2 key={c.id}>{c.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
