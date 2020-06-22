import React, { useState } from "react";
import "../App.css";

const Receipt = (props) => {
  let receiptId = props.receipt.id;
  
  let order = Object.values(props.receipt.order).map((e) => <li>{e}</li>);
  let payStatus = props.receipt.paid ? "paid" : "unpaid";
  let person = props.receipt.person;

  return (
    <div
      className="receipt"
      onClick={() => props.updatePaid(props.receipt.person)}
    >
      <div> Order Number: {receiptId} </div>
      <div> Name: {person}</div>
      <div>
        Order Details: <br />
        {order}
      </div>
      <div> Payment Status: {payStatus}</div>
    </div>
  );
};

export default Receipt;
