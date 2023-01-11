import React, { useState } from "react";


function Login({ customers, user, setUser }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  
  
  function handleSubmit(e) {
    e.preventDefault();
    const findUser = customers.find(
      (customer) =>
        customer.email.toLowerCase() === email.toLowerCase() &&
        customer.customer_id === parseInt(pwd)
    );
    setUser(findUser);
    setEmail("");
    setPwd("");
  }
  function matchNumbers(e) {
    if (e.target.value.match(/[0-9]/)) {
      setPwd(e.target.value);
    }
  }

  return (
    <div className="Login">
      <h2>Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          // type="password"
          maxLength={4}
          placeholder="Enter 4 digit passcode"
          value={pwd}
          onChange={matchNumbers}
        />
        <button type="submit">Login</button>
      </form>
      
    </div>
  );
}
export default Login;
