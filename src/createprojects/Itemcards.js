import React from "react";

function Itemcards({ item, newProject }) {
  console.log(newProject)
  


    return (
    <div>{newProject.project_name === item.project_category ? (
      <form>
      <div>{item.item_name}</div>
    </form>
    ) : null}
    </div>
  );
}

export default Itemcards;
