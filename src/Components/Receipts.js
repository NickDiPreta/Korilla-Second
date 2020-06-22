import React, { useState } from "react";
import "../App.css";
import Receipt from "./Receipt";

const Receipts = (props) => {
  let receiptsMapped = props.receiptsArr.map((receipt) => {
    return (
      <Receipt
        key={receipt.id}
        updatePaid={props.updatePaid}
        receipt={receipt}
      />
    );
  });
  return <div className="container">{receiptsMapped}</div>;
};
export default Receipts;
