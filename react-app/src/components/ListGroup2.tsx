import React from 'react'
import {useState } from 'react';


// 1. managing state

const ListGroup2 = () => {

    const items = ["New York", "Tokyo", "London"];

    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
      <>
        <h1>List 2</h1>
        {items.length === 0 && <p>no item found</p>}
  
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className= {
                selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
              }
              key={item}
              onClick={() => { setSelectedIndex(index)}}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup2