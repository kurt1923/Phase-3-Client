import React from 'react'

function Itemstoadd({item, handleDeleteItem}) {
  
  
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
        

// function checkItem() {
//     console.log(item.id)
// }
    return (
  <tr>
    <td className="item">{item.item_name}</td>
    <td className="quantity">
      <input type="tel" name="qty"  placeholder="Enter your Quantity" />
    </td>
    <td className="price">
      <span>{item.item_cost*item.quantity}</span> $
    </td>
    <button className="m-2 btn btn-secondary">Update Quantity</button>
    <button className="m-2 btn btn-secondary" onClick={deleteItem} >Delete Item</button>
  </tr>
)
}

export default Itemstoadd