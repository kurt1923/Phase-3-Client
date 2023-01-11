import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./login folder/Login";
import Logincreate from "./login folder/Logincreate";
import Home from "./Home";
import Admin from "./admin folder/Admin";
import Customerprojects from "./Customerprojects";


function App() {
  const [customers, setCustomers] = useState([]);
  const [user, setUser] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://127.0.0.1:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);
console.log(user)
  function adminDelete(id) {
    const updatedCustomers = customers.filter((customer) => customer.id !== id);
    setCustomers(updatedCustomers);
  }

  const adminPage =
    user.full_name === "admin" && user.customer_id === 1111 ? (
      <Admin customers={customers} setCustomers={setCustomers} adminDelete={adminDelete} />
    ) : null;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {adminPage}
      <Logincreate
        setCustomers={setCustomers}
        customers={customers}
        user={user}
        setUser={setUser}
      />
      <Login customers={customers} setCustomers={setCustomers} user={user} setUser={setUser} />
      {user === undefined || [] ? (
        <h3>
          No matching email and passcode. Please verify email and passcode are
          correct or create new Account.
        </h3>
      ) : (
        <Customerprojects user={user} setUser={setUser} />
      )}
    </div>
  );
}

export default App;
