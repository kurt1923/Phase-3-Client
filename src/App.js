import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Logincreate from "./Logincreate";
import Home from "./Home";


function App() {
  const [customers, setCustomers] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    fetch("http://127.0.0.1:9292/customers")
      .then((r) => r.json())
      .then((data) => {
        setCustomers(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Logincreate setCustomers={setCustomers} customers={customers} />
      <Login customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App;
