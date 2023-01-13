import React, { useState } from "react";
import Logincreate from "./Logincreate";
import { useNavigate } from "react-router-dom";

function Login({
  setCustomers,
  customers,
  user,
  setUser,
  noUsers,
  setProjects,
}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [createAccount, setCreateAccount] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const findUser = customers.find(
      (customer) =>
        customer.email.toLowerCase() === email.toLowerCase() &&
        customer.customer_id === parseInt(pwd)
    );
    findUser
      ? setUser(findUser) && navigate("/Customerprojects")
      : alert("Wrong email or password. If you don't have an account try creating one.") && setUser([]);
    setEmail("");
    setPwd("");

    console.log(findUser);
    //kurtv0727@gmail.com
  }
  function matchNumbers(e) {
    if (e.target.value.match(/[0-9]/)) {
      setPwd(e.target.value);
    } else {
      setPwd("");
    }
  }

  function createAccountbtn() {
    setCreateAccount(!createAccount);
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
          minLength={4}
          placeholder="Enter 4 digit passcode"
          value={pwd}
          onChange={matchNumbers}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        <button onClick={createAccountbtn}>Create Account</button>
        {createAccount ? (
          <Logincreate
            setCustomers={setCustomers}
            customers={customers}
            user={user}
            setUser={setUser}
          />
        ) : null}
      </div>
    </div>
  );
}
export default Login;
