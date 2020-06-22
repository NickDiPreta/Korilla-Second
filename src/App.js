import React, { useState } from "react";
import "./App.css";
import receiptsArr from "./Components/receiptData";
import Receipts from "./Components/Receipts";
import Form from "./Components/Form";
import Order from "./Components/Order";

function App() {
  const [receipt, setReceipt] = useState(receiptsArr);
  const [name, setName] = useState("");
  const [order, setOrder] = useState([]);
  const [food, setFood] = useState("");
  const [newname, setnewName] = useState("");
  const [rice, setRice] = useState("");
  const [dressing, setDressing] = useState("");
  const [drink, setDrink] = useState("");

  const handleOrder = (event) => {
    event.preventDefault();
    let price = Math.floor(Math.random() * (25 - 15)) + 15;
    const newOrder = {
      order: {
        main: order,
        protein: food,
        rice: rice,
        sauce: dressing,
        drink: drink,
        price: price,
      },
      person: newname,
    };

    let dupe = [...receipt];
    dupe.push(newOrder);
    setOrder([]);
    setFood("");
    setnewName("");
    setRice("");
    setDressing("");
    setDrink("");
    setReceipt(dupe);
  };

  const handleNewOrder = (event) => {
    setOrder(event.target.value);
  };
  const handleNewName = (event) => {
    setnewName(event.target.value);
  };
  const handleFoodUpdate = (event) => {
    setFood(event.target.value);
  };
  const handleRice = (event) => {
    setRice(event.target.value);
  };
  const handleDressing = (event) => {
    setDressing(event.target.value);
  };
  const handleDrink = (event) => {
    setDrink(event.target.value);
  };

  const handleReceiptsUpdate = (name) => {
    if (typeof name != "string") {
      setReceipt(receiptsArr);
    } else {
      let updated = [];
      receipt.map((e) => {
        if (e.person == name) {
          updated.push(e);
        }
      });
      updated.length < 1 ? setReceipt(receiptsArr) : setReceipt(updated);
    }
  };

  const updatePaid = (payingcustomer) => {
    let customerArray = [...receipt];
    for (let customer of customerArray) {
      if (customer.person === payingcustomer) {
        customer.paid = !customer.paid;
      }
      setReceipt(customerArray);
    }
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleReceiptsUpdate(name);
    setName("");
  };

  const filterPaid = () =>{
    console.log("Filtering paid receipts");
    let copyArr = [...receipt];
    let onlyPaid = copyArr.filter(e=>{
      return e.paid == true
    })
    setReceipt(onlyPaid)
  }
  const filterUnpaid = () =>{
    let copyAry = [...receipt];
    let onlyPaid = copyAry.filter(e=>{
      return e.paid == false
    })
    setReceipt(onlyPaid)
  }

  const alphabetize = () =>{
    let copyAry = [...receipt];
    copyAry.sort((a,b) => a.person > b.person ? 1 : -1)
    setReceipt(copyAry)
  }
  const reset = () => { 
    setReceipt(receiptsArr)
  }
  return (
    <div className="App">
      <img src="https://www.makeitbutter.com/account-assets/ey7d/account_images/mib-business-homepage-logo-40d0b7f5.jpg"/>
      <div id="head">
        <h1 id="store-name"></h1>
        <div>
          <Form submit={handleSubmit} change={handleChange} name={name} />
        </div>
      </div>
      <div>
        <Order
          submit={handleOrder}
          handleNewOrder={handleNewOrder}
          handleNewName={handleNewName}
          handleFoodUpdate={handleFoodUpdate}
          order={order}
          newname={newname}
          food={food}
          rice={rice}
          dressing={dressing}
          drink={drink}
          handleRice={handleRice}
          handleDressing={handleDressing}
          handleDrink={handleDrink}
        />
        <div id="sortBtns">
        <button onClick={filterPaid}>Paid</button>
        <button onClick={filterUnpaid}>Unpaid</button>
        <button onClick={alphabetize}>Sort Alphabetically</button>
        <button onClick={reset}>Reset</button>
        </div>
        <Receipts
          receiptsArr={receipt}
          updatePaid={updatePaid}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
