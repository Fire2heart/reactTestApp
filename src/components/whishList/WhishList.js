import React from "react";
import { HiTrash } from "react-icons/hi";
import "./whishList.css";

function WhishList({ items, changeBox, deleteItem }) {
  return (
    <section>
      {items.length ? (
        <ul className="whishList">
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => changeBox(item.id)}
              />
              <label style={{ textDecoration: item.checked && "line-through" }}>
                {item.name}
              </label>
              <HiTrash
                className="icon"
                role="button"
                tabIndex="0"
                onClick={() => deleteItem(item.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h2>No items</h2>
      )}
    </section>
  );
}

export default WhishList;
