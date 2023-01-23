import React, { useState } from 'react'

function Itemstoadd({item, handleDeleteItem, updateQuantity, editProject}) {
  const [newQuantity, setNewQuantity] = useState(item.quantity)
  
  

  
  const newItemData = {
    item_name: item.item_name,
    item_cost: item.item_cost,
    project_id: item.project_id,
    project_category: item.project_category,
    quantity: newQuantity
}
  
  function deleteItem() {
    fetch(`http://127.0.0.1:9292/items/${item.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((r) => r.json())
    .then((data) => {
        handleDeleteItem(data.id);
    });
    }
        
    function changeQuantity() {
        fetch(`http://127.0.0.1:9292/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newItemData),
        })
        .then((r) => r.json())
        .then((data) => {
            updateQuantity(data);
        });
    }

    return (
  <tr>
    <td className="item">{item.item_name}</td>
    <td className="quantity">
      <input type="number" name="quantity" value={newQuantity} onChange={(e) => setNewQuantity(e.target.value)} placeholder="Enter your Quantity" />
    </td>
    <td className="price">
      <span>{item.item_cost*item.quantity}</span>$
    </td>
    <>
    <button className="m-2 btn btn-secondary" onClick={changeQuantity} >Update Quantity</button>
    <button className="m-2 btn btn-secondary" onClick={deleteItem} >Delete Item</button>
    </>
  </tr>
)
}

export default Itemstoadd