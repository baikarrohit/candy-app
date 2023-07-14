import { useContext } from "react";
import classes from "./CandyItem.module.css";
import CartContext from "../../Store/cart-context";

const CandyItem = (props) => {
  const cartCntx = useContext(CartContext);

  return (
    <div>
      <ul>
        {cartCntx.items.map((candy) => (
          <li key={candy.id} className={classes.item}>
            <strong>{candy.name}</strong> - {candy.desc} - {candy.price}
            <button
              onClick={() => cartCntx.increaseQuantity(candy.id, 1)}
              className={classes.btn1}
            >
              Buy 1
            </button>
            <button
              onClick={() => cartCntx.increaseQuantity(candy.id, 2)}
              className={classes.btn2}
            >
              Buy 2
            </button>
            <button
              onClick={() => cartCntx.increaseQuantity(candy.id, 3)}
              className={classes.btn3}
            >
              Buy 3
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CandyItem;
