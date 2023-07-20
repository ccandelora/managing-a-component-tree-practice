import React from "react";

function ToDoItem({ id, text, deleteItem }) {
  return (
    <div
      onClick={() => {
        deleteItem(id);
      }}
    >
      <li>{text}</li>
    </div>
  );
}

export default ToDoItem;
