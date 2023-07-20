import React from "react";
import ToDoItem from "./ToDoItem";

function outputArea({ items, deleteItem }) {
  return (
    <div>
      <ul>
        {items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default outputArea;
