import React from "react";

const Order = (props) => {
  console.log("order submitted");
  return (
    <div id="OrderWrapper">
    <form id="NewOrder"onSubmit={props.submit}>
      <label htmlFor="newname">Place a new order:</label>
      <input
        type="text"
        value={props.newname}
        onChange={props.handleNewName}
        id="newName"
        placeholder="Name"
      ></input>
      <label htmlFor="order"></label>
      <input
        type="text"
        value={props.order}
        onChange={props.handleNewOrder}
        id="order"
        placeholder="Choose your base"
      />
      <label htmlFor="order"></label>
      <input
        type="text"
        value={props.food}
        onChange={props.handleFoodUpdate}
        id="food"
        placeholder="Choose a protein"
      />
      <label htmlFor="order"></label>
      <input
        type="text"
        value={props.rice}
        onChange={props.handleRice}
        id="rice"
        placeholder="Choose a type of rice"
      />
      <label htmlFor="order"></label>
      <input
        type="text"
        value={props.dressing}
        onChange={props.handleDressing}
        id="dressing"
        placeholder="Choose a type of dressing"
      />
      <label htmlFor="order"></label>
      <input
        type="text"
        value={props.drink}
        onChange={props.handleDrink}
        id="drink"
        placeholder="Choose a drink"
      />
      <input type="submit" />
    </form>
    </div>    
  );
};

export default Order;
