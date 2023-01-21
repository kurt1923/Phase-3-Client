import React from 'react'
import Itemstoadd from './Itemstoadd'

function Edititems({editProject, setEditProject, addNewItem, user, storeItems, setStoreItem, handleDeleteItem, updateQuantity}) {
  
    
  const itemsList = storeItems.map((item) => (
item.project_id === editProject.id ? (
        <Itemstoadd
         key={item.id}
         item={item}
         user={user}
         setEditProject={setEditProject}
         editProject={editProject}
         addNewItem={addNewItem}
         handleDeleteItem={handleDeleteItem}
          updateQuantity={updateQuantity}
       />
     ) : null
    ) 
  )
  /////your pulling from the editProject.items array and need to pull from the storeItems array
console.log(editProject)

return (
  <div className="container">
  <h2 className="p-5 title text-center">Select Items To Add To Your {editProject.project_name} Project</h2>
  <h4 className="p-2 title text-center">{editProject.project_description}</h4>
  <table>
    <tbody>
   <tr>
       <th>Items</th>
       <th>Quantity</th>
       <th>Price</th>
   </tr>
    {itemsList}
   <tr>
       <td className="total-text" colSpan="2">Total Price</td>
       <td className="total-number"><span className="number">0</span><span className="dollar-sign">$</span></td>
   </tr>
   </tbody>
</table>

</div>
);
}

export default Edititems