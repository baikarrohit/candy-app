import classes from './headerCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext)
    let quantity = 0;
    cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });
   return (
    <button className={classes.button} onClick={props.onClick}>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
    </button>
   )
}

export default HeaderCartButton;