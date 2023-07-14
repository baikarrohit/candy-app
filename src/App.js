import "./App.css";
import Form from "./Components/Form/Form";
import CandyItem from "./Components/Candies/CandyItem";
import { useState } from "react";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/cart";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Form />
        <CandyItem />
      </main>
    </CartProvider>
  );
}

export default App;
