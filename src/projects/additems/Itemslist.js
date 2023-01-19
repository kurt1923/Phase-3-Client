import React from "react";
import Itemcards from "./Itemcards";

function Itemslist({ project, user, setEditProject, editProject, storeItems, setStoreItems, addNewItem}) {
 


  const itemsList = storeItems.map((storeItem) => {
    if (storeItem.quantity === 0 && storeItem.project_category === editProject.project_name) {
      return (
         <Itemcards
          key={storeItem.id}
          storeItem={storeItem}
          user={user}
          setEditProject={setEditProject}
          editProject={editProject}
          storeItems={storeItems}
          setStoreItems={setStoreItems}
          addNewItem={addNewItem}
        />
      );
      }
    });

    return (
        <div className="container">
        <h2 className="p-5 title text-center">Select Items To Add To Your {editProject.project_name} Project</h2>
        <h4 className="p-2 title text-center">These are the typical items needed for this project. Add the</h4>
        <h4 className="p-2 title text-center"> items to your project to get started with your estimate.</h4>
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
