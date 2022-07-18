import React, { useState } from "react";
import "./StoreForm.css";
const StoreForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredQunatity, setEnteredQuantity] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const [validtTitle, isValidTitle] = useState(true);
  const [validQuantity, isValidQuantity] = useState(true);

  const titleChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      isValidTitle(true);
    }
    setEnteredTitle(event.target.value);
  };
  const qunatityChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){
      isValidQuantity(true);
    }
    setEnteredQuantity(event.target.value);
  };
  const dateChangeDate = (event) => {
    setEnteredDate(event.target.value);
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    if(enteredTitle.trim().length === 0){
      isValidTitle(false);
      
    }

    if(enteredQunatity.trim().length === 0){
      isValidQuantity(false);
    }

    if((enteredTitle.trim().length === 0) || (enteredQunatity.trim().length === 0)){
      setEnteredTitle("");
      setEnteredQuantity("");
      setEnteredDate("");
      return;
    }

    const storeData = {
      title: enteredTitle,
      quantity: enteredQunatity,
      date: new Date(enteredDate),
    };

    props.onSubmit(storeData);
    setEnteredTitle("");
    setEnteredQuantity("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-store__controls">
        <div className={`new-store__control ${!validtTitle ? 'invalid' : '' }`}>
          <label>Title</label>
          <input
            placeholder="Enter Title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={`new-store__control ${!validQuantity ? 'invalid' : '' }`}>
          <label>Quantity</label>
          <input
            placeholder="Enter Quantity"
            type="number"
            min="0"
            value={enteredQunatity}
            onChange={qunatityChangeHandler}
          />
        </div>
        <div className="new-store__control">
          <label>Date</label>
          <input
            type="date"
            min="01-01-2020"
            max="01-01-2025"
            value={enteredDate}
            onChange={dateChangeDate}
          />
        </div>
      </div>
      <div className="new-store__actions">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default StoreForm;
