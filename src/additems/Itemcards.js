import React from "react";

function Itemcards({ storeItem, user, setEditProject, editProject, storeItems, setStoreItems, addNewItem }) {
  
  function submitNewItem(e) {
    const newItemData = {
      item_name: storeItem.item_name,
      item_cost: storeItem.item_cost,
      project_id: editProject.id,
      project_category: storeItem.project_category,
      quantity: 1
    };
    e.preventDefault();
    fetch(`http://127.0.0.1:9292/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItemData),
    })
      .then((r) => r.json())
      .then((data) => {
        addNewItem(data);
      });
  }
  
console.log(editProject.id)
  
  return (
    <>
    <tr>
      <td className="item">{storeItem.item_name}</td>
      <td className="price">
        <span>{storeItem.item_cost}</span> $
      </td>
      <button className="m-2 btn btn-secondary" onClick={submitNewItem}>Add to Project</button>
    </tr>
    </>
  );
}
//2 buttons. one to add item to project with post request. one to update item quantity with patch request
export default Itemcards;