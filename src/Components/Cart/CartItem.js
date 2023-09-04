import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li key={props.key} className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{`${props.price}Rs.`}</span>
          <span className={classes.amount}>x {props.quantity}</span>
        </div>
      </div>
      
    </li>
  );
};

export default CartItem;