import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login folder/Login";
import Home from "./Home";
import Admin from "./admin folder/Admin";
import Customerprojects from "./Customerprojects";
import NavBar from "./NavBar";

function App() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState([]);
  

  useEffect(() => {
    fetch("http://127.0.0.1:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
  console.log("hi");

  function adminDelete(id) {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  }

  const adminPage =
    user.email === "admin" && user.customer_id === 1111 ? (
      <Admin
        customers={customers}
        setCustomers={setCustomers}
        adminDelete={adminDelete}
      />
    ) : null;

  return (
    <div className="App">
      <NavBar />
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
            />
          }
        />
        <Route
          path="/Customerprojects"
          element={
            <Customerprojects
              user={user}
              setUser={setUser}
            />
          }
        />
      </Routes>
      {adminPage}

      
    </div>
  );
}

export default App;
