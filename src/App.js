import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login folder/Login";
import Home from "./Home";
import Admin from "./admin folder/Admin";
import Customerprojects from "./projects/Customerprojects";
import NavBar from "./NavBar";
import Createnewproject from "./createprojects/Createnewproject";

function App() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState([]);
  const [projects, setProjects] = useState([]);
  const noUsers = user === undefined || user.length === 0;

  useEffect(() => {
    setProjects(user.projects);
  }, [user]);

  useEffect(() => {
    fetch("http://127.0.0.1:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  // console.log(user);
  

  function adminDelete(id) {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  }
  function handleDelete(id) {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  }

  function addNewProject(addedProject) {
    const updatedProjects = [...projects, addedProject];
    setProjects(updatedProjects);
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
              // handleDelete={handleDelete}
              // projects={projects}
              // setProjects={setProjects}
            />
          }
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
