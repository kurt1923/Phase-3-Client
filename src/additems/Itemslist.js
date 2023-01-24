import React from "react";
import Itemcards from "./Itemcards";

function Itemslist({ setEditProject, editProject, storeItems, addNewItem }) {
  const itemsList = storeItems.map((storeItem) =>
    storeItem.id < 37 &&
    storeItem.project_category === editProject.project_name ? (
      <Itemcards
        key={storeItem.id}
        storeItem={storeItem}
        setEditProject={setEditProject}
        editProject={editProject}
        addNewItem={addNewItem}
      />
    ) : null
  );

  return (
    <div className="container">
      <h2 className="p-5 title text-center">
        Select Items To Add To Your {editProject.project_name} Project
      </h2>
      <h4 className="p-2 title text-center">
        These are the typical items needed for this project. Add the
      </h4>
      <h4 className="p-2 title text-center">
        items to your project to get started with your estimate. Once
      </h4>
      <h4 className="p-2 title text-center">
         all items are added, go back to My Projects and edit quantity.
      </h4>
      <table>
        <tr>
          <th>Items</th>
          <th>Item Cost</th>
        </tr>
        {itemsList}
      </table>
    </div>
  );
}

export default Itemslist;
