import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [budget, setBudget] = useState("");

  // let budgetColor = {
  //   backgroundColor : 'red'
  // }

  const fruits = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Orange", price: 15 },
    { name: "Grapes", price: 25 },
    { name: "Pineapple", price: 30 },
    { name: "Mango", price: 40 },
  ];

  return (
    <div>
      <h2>Enter your budget to check available items:</h2>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <ul>
        {fruits.map((item) => (
          <li key={item.name}>
            {item.name}
            <span
              style={{
                // budget > item.price ? color: "red" :  color: "red",
                color:
                  budget >= item.price
                    ? "green"
                    : budget == ""
                    ? "black"
                    : "red",
                // color: (budget == "") & "black",
              }}
            >
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
