import React, { useState } from "react";

function Logincreate({ setCustomers, customers, user, setUser }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    customer_id: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:9292/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        addCustomer(data);
        setUser(data)
      });
      setFormData({
        full_name: "",
        email: "",
        phone_number: "",
        customer_id: "",
      });
  }

  function addCustomer(data) {
    setCustomers([...customers, data]);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(user);
  }
  function matchNumbers(e) {
    if (e.target.value.match(/^[0-9]+$/)) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  }

  return (
    <div className="Create_login">
      <h2>Create Login</h2>
      <form className="create_login_form" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          id="full_name"
          value={formData.full_name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="number"
          placeholder="Enter Phone Number"
          id="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          // type="password"
          placeholder="Enter 4 digit passcode"
          maxLength={4}
          id="customer_id"
          value={formData.customer_id}
          onChange={matchNumbers}
        />
        <button type="submit">Create Login</button>
      </form>
    </div>
  );
}

export default Logincreate;
