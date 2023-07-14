import HeaderCartButton from "./headerCartButton";
import classes from "./Header.module.css";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Candy App</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      
    </Fragment>
  );
};

export default Header;
