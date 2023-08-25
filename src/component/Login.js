import React, { useState } from "react";
import { Link, Navigate, Route, Routes, useNavigate } from "react-router-dom";
//import Admin from './adminComponents/admin';
//import FarmerModulePage from './farmerComponents/farmers_home';
//import RegistrationForm from './register';



let LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  let loginCheck = () => {};

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here
    console.log("Logging in with:", email, password);
  };

  const submitData = (e) => {
    e.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    //send data to server
    //fetch("http://localhost:8080/login?email="+{email}+"&password="+{password},reqOptions)
    fetch("http://localhost:8080/login", reqOptions).then((resp) => {
      if (resp.ok) alert("success");
      else alert("failed");
    });
    /*.then(data => {
      if(data==='2')
      {
        navigate("/admin_home");
      }
      else if(data==='1')
      {
        navigate("/company_home");
      }
      else if(data==='0')
      {
        navigate("/customer_home");
      }
      else
      {
        <h2>Wrong UserName  or Password</h2>
      }
     
    })
     */
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email Address</label>
                  <input type="text" className="form-control" id="email"value={email}  onChange={handleEmailChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary" onClick={submitData}  >  Login  </button>
                </div>
              </form>
              <div>{msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
