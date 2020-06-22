import React from "react";

const Form = (props) => {
  console.log("new order receipt added");

  return (
    
    <form onSubmit={props.submit}>
      <label htmlFor="name">Find your order</label>
      <input type="text" value={props.name} onChange={props.change} id="todo" />

      <input type="submit" />
    </form>
    
  );
};

export default Form;
