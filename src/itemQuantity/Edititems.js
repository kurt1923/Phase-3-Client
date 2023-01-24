import React from "react";
import Itemstoadd from "./Itemstoadd";

function Edititems({
  editProject,
  storeItems,
  handleDeleteItem,
  updateQuantity,
}) {
  const itemsFilter = storeItems.filter(
    (item) => item.project_id === editProject.id
  );
  const itemsValue = itemsFilter
    .map((item) => item.item_cost * item.quantity)
    .reduce((a, b) => a + b, 0);
  const projTotal = parseInt(itemsValue) + parseInt(editProject.labor_cost);

  const itemsList = itemsFilter.map((item) =>
    item.project_id === editProject.id ? (
      <Itemstoadd
        key={item.id}
        item={item}
        handleDeleteItem={handleDeleteItem}
        updateQuantity={updateQuantity}
      />
    ) : null
  );

  return (
    <div className="container">
      <h2 className="p-5 title text-center">
        Select Items To Add To Your {editProject.project_name} Project
      </h2>
      <h4 className="p-2 title text-center">
        {editProject.project_description}
      </h4>
      <table>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
          {itemsList}
          <tr>
            <td className="total-text" colSpan="2">
              Total Price
            </td>
            <td className="total-number">
              <span className="number">{itemsValue}$</span>
              <span className="dollar-sign">$</span>
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="p-5 title text-center">
        Project total including labor cost is {projTotal}$
      </h2>
    </div>
  );
}

export default Edititems;
