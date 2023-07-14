import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateTotalHandler();
  });

  const addItemToCartHandler = (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex === -1) {
      updateItems((prevItems) => [...prevItems, item]);
    } else {
      updateItems((prevItems) => {
        const temp = [...prevItems];
        temp[existingItemIndex].quantity += parseInt(item.quantity);
        return temp;
      });
    }
  };

  const increaseQuantityHandler = (id, quantity) => {
    updateItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      );
      return updatedItems;
    });
  };

  const calculateTotalHandler = () => {
    let total = 0;
    items.forEach((item) => {
      total += Number(item.price) * Number(item.quantity);
    });
    setTotalAmount(total);
  };

  const removeItemFromCartHandler = (id) => {
    updateItems((prevItems) => {
      const updatedItems = prevItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedItems.filter((item) => item.quantity >= 1);
    });
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    calculateTotal: calculateTotalHandler,
    increaseQuantity: increaseQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
