import React from 'react';

const CartContext = React.createContext({
    items:[],
    totalAmount:0,
    addItemToCart: (item) => {},
    removeItem: (id) => {},
    increaseQuantity: (id,quantity) => {}
});

export default CartContext;