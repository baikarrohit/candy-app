import { useContext, useState } from "react";
import classes from './Form.module.css';
import ItemContext from "../../Store/item-context";

const Form = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");

  const itemCtx = useContext(ItemContext);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const descChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const candyData = {
      id:Math.random().toString(),
      name: enteredName,
      desc: enteredDesc,
      price: enteredPrice,
      quantity: 0
      
    };
    itemCtx.addItem({...candyData});

    setEnteredName("");
    setEnteredDesc("");
    setEnteredPrice("");
  };
  return (
      <form className={classes.form} onSubmit={submitHandler}>
        <label>Candy Name:</label>
        <input type="text" value={enteredName} onChange={nameChangeHandler} />
        <label>Description:</label>
        <input type="text" value={enteredDesc} onChange={descChangeHandler} />
        <label>Price:</label>
        <input
          type="number"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <button className={classes.button}type="submit">Add Candy</button>
      </form>
  );
};

export default Form;