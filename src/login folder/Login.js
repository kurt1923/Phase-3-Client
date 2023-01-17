import React, { useState } from "react";
import Logincreate from "./Logincreate";
import { useNavigate } from "react-router-dom";

function Login({ setCustomers, customers, user, setUser, noUsers }) {
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
      ? setUser(findUser)
      : alert(
          "Wrong email or password. If you don't have an account try creating one."
        ) && setUser([]);
    setEmail("");
    setPwd("");
    navigate("/Customerprojects");

    console.log(user);
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
    <div className="global-container">
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Login</h3>
          <form onSubmit={handleSubmit}>
            <div className="p-2 form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="p-2 form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                // type="password"
                maxLength={4}
                minLength={4}
                className="form-control form-control-sm"
                placeholder="Enter 4 digit passcode"
                value={pwd}
                onChange={matchNumbers}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block">
              Sign in
            </button>
          </form>
            <button className="btn btn-primary btn-block" onClick={createAccountbtn}>Create Account</button>
        </div>
      </div>

      <div>
        {createAccount ? (
          <Logincreate
            setCustomers={setCustomers}
            customers={customers}
            user={user}
            setUser={setUser}
            noUsers={noUsers}
          />
        ) : null}
      </div>
    </div>
  );
}
export default Login;
