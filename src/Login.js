import React, { useState } from "react";
import Customerprojects from "./Customerprojects";

function Login({ customers }) {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState([])
  

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
      {user === undefined ? (
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
export default Login;
