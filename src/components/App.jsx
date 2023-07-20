import React, { useState } from "react";
import InputArea from "./InputArea";
import OutputArea from "./OutputArea";

function App() {
  const [items, setItems] = useState([]);

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <OutputArea items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
