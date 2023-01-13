import React, { useState, useEffect } from "react";
import Itemcards from "./Itemcards";

function Additems({ newProject }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/items`)
      .then((r) => r.json())
      .then((data) => {
        setItems(data);
      });
  }, []);
  console.log(items);

  const itemsList = items.map((item) =>
    item.project_id === 0 ? (
      <Itemcards
        key={item.id}
        item={item}
        newProject={newProject}
        // addNewProject={addNewProject}
      />
    ) : null
  );

  return <div>{itemsList}</div>;
}

export default Additems;
