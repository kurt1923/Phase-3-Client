import React, { useState, useEffect } from "react";
import Itemcards from "./Itemcards";

function Additems({ newProject, items }) {


  const itemsList = items.map((item) =>
    
      <Itemcards
        key={item.id}
        item={item}
        newProject={newProject}
      />
  );

  return <div>{itemsList}</div>;
}

export default Additems;
