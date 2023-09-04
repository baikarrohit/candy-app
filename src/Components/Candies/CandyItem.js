import { useContext } from "react";
import classes from "./CandyItem.module.css";
import CartContext from "../../Store/cart-context";
import ItemContext from "../../Store/item-context";

const CandyItem = (props) => {
  const cartCtx = useContext(CartContext);
  const itemCtx = useContext(ItemContext);

  const clickBuy = (candy, quantity) => {
    const candyItem = {
      name: candy.name,
      quantity: quantity,
      price: candy.price,
    };

    cartCtx.addItem(candyItem);
  };

  return (
    <div>
      <ul>
        {itemCtx.items.map((candy, index) => (
          <li key={candy.id} className={classes.item}>
            <strong>{candy.name}</strong> - {candy.desc} - {candy.price}Rs.
            <button
              onClick={() => clickBuy(candy, 1)}
              className={classes.btn1}
              data-index={index}
            >
              Buy 1
            </button>
            <button
              onClick={() => clickBuy(candy, 2)}
              className={classes.btn2}
              data-index={index}
            >
              Buy 2
            </button>
            <button
              onClick={() => clickBuy(candy, 3)}
              className={classes.btn3}
              data-index={index}
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
