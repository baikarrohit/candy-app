import React, { useState, useEffect } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const onRefresh = async () => {
    const res = await axios.get(
      "https://crudcrud.com/api/836ba48a200641619c74dd371c38a1c7/candy"
    );
    const data = res.data;
    
    // Merge items with the same name
    const mergedItems = [];
    data.forEach((item) => {
      const existingItem = mergedItems.find((existing) => existing.name === item.name);
      if (existingItem) {
        existingItem.quantity += parseInt(item.quantity);
      } else {
        mergedItems.push(item);
      }
    });
    
    updateItems(mergedItems);
  };

  useEffect(() => {
    onRefresh();
  }, []);

  const addItemToCartHandler = async (item) => {
    const existingItemIndex = items.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex === -1) {
      // Item doesn't exist in the cart, add it
      updateItems([...items, item]);
    } else {
      // Item already exists in the cart, update the quantity
      const temp = [...items];
      temp[existingItemIndex].quantity =
        parseInt(temp[existingItemIndex].quantity) + parseInt(item.quantity);
      updateItems(temp);
    }
    await axios.post(
      "https://crudcrud.com/api/836ba48a200641619c74dd371c38a1c7/candy",
      item
    );
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
