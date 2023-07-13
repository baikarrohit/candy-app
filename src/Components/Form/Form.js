
import { useState } from "react";

const Form = (props) => {
    const [enteredName,setEnteredName] = useState("");
    const [enteredDesc,setEnteredDesc] = useState("");
    const [enteredPrice,setEnteredPrice] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }
    const descChangeHandler = (event) => {
        setEnteredDesc(event.target.value);
    }
    const priceChangeHandler = (event) =>{
        setEnteredPrice(event.target.value);
    }
  
    const submitHandler = (event) => {
        event.preventDefault();
        const candyData = {
            name:enteredName,
            desc:enteredDesc,
            price:enteredPrice
        }
        props.onSubmit(candyData);
   
    }
    return <div>
        <form onSubmit={submitHandler}>
            <label>Candy Name:</label>
            <input type="text" value={enteredName} onChange={nameChangeHandler}/>
            <label>Description:</label>
            <input type="text" value={enteredDesc} onChange={descChangeHandler}/>
            <label>Price:</label>
            <input type="number" value={enteredPrice} onChange={priceChangeHandler}/>
            <button type="submit">Add Candy</button>
        </form>
    </div>
}

export default Form;