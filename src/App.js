import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login folder/Login";
import Home from "./Home";
import Admin from "./admin folder/Admin";
import Customerprojects from "./projects/Customerprojects";
import NavBar from "./NavBar";
import Createnewproject from "./createprojects/Createnewproject";
import Customerinfo from "./login folder/Customerinfo";
import Itemslist from "./additems/Itemslist";
import Edititems from "./itemQuantity/Edititems";

function App() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editProject, setEditProject] = useState([]);
  const [storeItems, setStoreItems] = useState([]);
  const noUsers = user === undefined || user.length === 0;
  

  useEffect(() => {
    fetch("http://127.0.0.1:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/projects`)
      .then((r) => r.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://127.0.0.1:9292/items`)
      .then((r) => r.json())
      .then((data) => {
        setStoreItems(data);
      });
  }, []);


  function updateQuantity(patchedItem) {
    const updatedQuantity = storeItems.map((item) =>
      item.id === patchedItem.id ? patchedItem : item
      );
      setStoreItems(updatedQuantity)
  }

  function adminDelete(id) {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  }
  function handleDelete(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  }
  function handleDeleteItem(id) {
    const updatedItems = storeItems.filter((item) => item.id !== id);
    setStoreItems(updatedItems);
  }

  function addNewProject(addedProject) {
    const updatedProjects = [...projects, addedProject];
    setProjects(updatedProjects);
  }
  function addNewItem(addedItem) {
    const updatedItems = [...storeItems, addedItem];
    setStoreItems(updatedItems);
  }

  function logOut() {
    setUser([]);
  }
  return (
    <div className="App">
      <NavBar noUsers={noUsers} user={user} logOut={logOut} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Login"
          element={
            <Login
              customers={customers}
              setCustomers={setCustomers}
              user={user}
              setUser={setUser}
              noUsers={noUsers}
              // projects={projects}
              // setProjects={setProjects}
            />
          }
        />
        <Route
          path="/Customerprojects"
          element={
            <Customerprojects
              user={user}
              setUser={setUser}
              projects={projects}
              setProjects={setProjects}
              noUsers={noUsers}
              handleDelete={handleDelete}
              editProject={editProject}
              setEditProject={setEditProject}


            />
          }
        />
        <Route
          path="/Customerprojects/Edititems"
          element={
            <Edititems
              user={user}
              setUser={setUser}
              noUsers={noUsers}
              editProject={editProject}
              setEditProject={setEditProject}
              storeItems={storeItems}
              setStoreItems={setStoreItems}
              addNewItem={addNewItem}
              handleDeleteItem={handleDeleteItem}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/Customerprojects/Additems"
          element={
            <Itemslist
              user={user}
              setUser={setUser}
              noUsers={noUsers}
              editProject={editProject}
              setEditProject={setEditProject}
              storeItems={storeItems}
              setStoreItems={setStoreItems}
              addNewItem={addNewItem}
            />
          }
        />
        <Route
          path="/Admin"
          element={
            <Admin
              user={user}
              customers={customers}
              setCustomers={setCustomers}
              adminDelete={adminDelete}
            />
          }
        />
        <Route
          path="/Createnewproject"
          element={
            <Createnewproject
              user={user}
              noUsers={noUsers}
              addNewProject={addNewProject}
              projects={projects}
              setProjects={setProjects}
            />
          }
        />
        <Route
          path="/Customerinfo"
          element={<Customerinfo user={user} projects={projects} />}
        />
      </Routes>
    </div>
  );
}
// const Switch = (str) => ({
//   "Yes": "517",
//   "No": "518",
// })[str] || '';

// console.log(Switch("Yes")); // 517
// console.log(Switch("No"));  // 518
// console.log(Switch("Non matching value")); // Empty

///ideas
////lets try making when the user clicks to add a project they are directed to that project page. from there they can add items to the project. once all the items are added they can make a post request for all the items to be added to the project.

export default App;

// return (
//   <div className="container">
//   <h2 className="p-5 title text-center">Select Items To Add To Your {editProject.project_name} Project</h2>
//   <h4 className="p-2 title text-center">{editProject.project_description}</h4>
//   <table>
//    <tr>
//        <th>Items</th>
//        <th>Quantity</th>
//        <th>Price</th>
//    </tr>
//     {itemsList}
//    <tr>
//        <td className="total-text" colspan="2">Total Price</td>
//        <td className="total-number"><span className="number">0</span><span className="dollar-sign">$</span></td>
//    </tr>
// </table>

// </div>
// );
// }

// return (
//   <tr>
//     <td className="item">{storeItem.item_name}</td>
//     <td className="quantity">
//       <input type="tel" name="qty" value= {quantity} onChange= {(e) => setQuantity(e.target.value)} placeholder="Enter your Quantity" />
//     </td>
//     <td className="price">
//       <span>{storeItem.item_cost*storeItem.quantity}</span> $
//     </td>
//     <button className="m-2 btn btn-secondary">Add to Project</button>
//     <button className="m-2 btn btn-secondary">Update Quantity</button>
//   </tr>
// );
// }
