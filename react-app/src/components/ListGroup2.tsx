import React from 'react'
import {useState } from 'react';

// 1. managing state
// 2. passing data via props


// 2
interface Props {
  items: string[];
  heading: string;
}

// 2
const ListGroup2 = ( { items, heading} : Props) => {

    // 1
    const [selectedIndex, setSelectedIndex] = useState(-1);
    
    return (
      <>
        <h1>{heading}</h1>
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
              // 1
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