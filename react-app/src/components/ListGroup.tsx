import React from "react";

// 1. mapping for array
// 2. conditional rendering


const ListGroup = () => {

  let items = ["New York", "Tokyo", "London"];
  items = [];
 
  // 2
  const getMessage = () => {
    items.length === 0 ? <p>no item found</p> : null;
  }

  return (
    <>
      <h1>List</h1>

      {/* 2 */}
      {getMessage}

      <ul className="list-group">
        {/* 1 */}
        {items.map((item) => (
          <li className="list-group-item" key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
