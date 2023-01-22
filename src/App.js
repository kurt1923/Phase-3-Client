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
  const projectPics = [{ id:1, category: "Add Ceiling Fan", pics: "./pics/fan.jpg" },
      { id:2, category: "Change Fan/Light", pics: "./pics/fan.jpg" },
      { id:3, category: "Receptacle", pics: "./pics/recepacle.jpg" },
      { id:4, category: "Devices", pics: "./pics/devices.jpg" },
      { id:5, category: "GFCI", pics: "./pics/gfci-outlet.jpg" },
      { id:6, category: "Wafer Lights", pics: "./pics/wafer.jpg" },
      { id:7, category: "Flood Lights", pics: "./pics/flood.jpg" },
      { id:8, category: "Replace Breaker", pics: "./pics/breaker.jpg" },
      { id:9, category: "Home Surge Protection", pics: "./pics/surge.jpg" },
      { id:10, category: "Exterior Receptacle", pics: "./pics/exteriorreceptacle.jpg" }
    ]
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
              projectPics={projectPics}


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
              projectPics={projectPics}
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



export default App;

