import React from "react";
import { MouseEvent } from "react";

// 1. mapping for array
// 2. conditional rendering
// 3. handling events

const ListGroup = () => {
  const items = ["New York", "Tokyo", "London"];
  //items = [];

  /* 2
  const getMessage = () => {
    items.length === 0 ? <p>no item found</p> : null;
  };*/

  // 3
  const handleClick = (e : MouseEvent) => console.log(e); //e.properties

  return (
    <>
      <h1>List</h1>

      {/* 2 */}
      {/*getMessage*/}
      {items.length === 0 && <p>no item found</p>}

      <ul className="list-group">
        {/* 1 */}
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            // onClick={() => console.log(item, "(item)", index, "(item index)")}
            
            // 3
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
