import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logincreate({ setCustomers, customers, user, setUser }) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    customer_id: "",
  });
  const navigate = useNavigate();

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
        setUser(data);
        navigate("/Customerprojects");
        console.log(data);
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
    <div className="card login-form">
      <div className="card-body">
        <h3 className="card-title text-center">Create Sign-in</h3>
        <form className="create_login_form" onSubmit={handleSubmit}>
          <div className="p-2 form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Username"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control form-control-sm"
              placeholder="Enter Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 form-group">
            <label>Phone Number</label>
            <input
              type="number"
              className="form-control form-control-sm"
              placeholder="Enter Phone Number"
              id="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="p-2 form-group">
            <label>Password</label>
            <input
              // type="password"
              placeholder="Enter 4 digit passcode"
              className="form-control form-control-sm"
              maxLength={4}
              id="customer_id"
              value={formData.customer_id}
              onChange={matchNumbers}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Logincreate;
