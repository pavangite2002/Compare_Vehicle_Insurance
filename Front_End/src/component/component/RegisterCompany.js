import React, { useReducer, useState } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';

function RegisteCompany() {
  const init = {
    company_name: '',
    license_no: '',
    email: '',
    address: '',
    contact_no: '',
    password: '',
    confirmPassword: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
      default:
        return state;
    }
  };

  const [info, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const isValidEmail = (email) => {
    const pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/;
    return pattern.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 5;
  };

  const doPasswordsMatch = () => {
    return info.password === info.confirmPassword;
  };

  const sendData = (e) => {
    e.preventDefault();

    if (!isValidEmail(info.email)) {
      setMsg('Invalid email address');
      return;
    }

    if (!isValidPassword(info.password)) {
      setMsg('Password must be at least 6 characters long');
      return;
    }

    if (!doPasswordsMatch()) {
      setMsg('Passwords do not match');
      return;
    }

    const reqOpitions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        company_name: info.company_name,
        email: info.email,
        password: info.password,
        address: info.address,
        contact_no: info.contact_no,
        license_no: info.license_no,
        login: {
          email: info.email,
          password: info.password,
          user_type: 1,
        },
      }),
    };

    fetch('http://localhost:8080/registerascompany', reqOpitions)
      .then((resp) => {
        if (resp.ok) {
          setMsg('');
          navigate('/loginsuccess');
        } else {
          setMsg('This company is already registered.');
        }
      });
  };

  return (
    <div className="container">
        <a className="btn btn-primary" href="/home">Home</a>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">
                Company Registration Form
              </h3>
              <form>
                {/* ...form fields */}
                <div className="form-body">
                               
                                <div className="company_name">
                                    <label className="form__label" for="company_name">Company Name </label>
                                    <input className="form__input" company_name="company_name" type="text" id="company_name" value={info.company_name} placeholder="Enter Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'company_name', val:e.target.value})}}/>
                                    <div id="cnameid" className="form-text"></div>
                                </div>
                               
                                <div className="license_no">
                                    <label className="form__label" for="license_no">License No </label>
                                    <input type="text" id="license_no" company_name="license_no" className="form__input" value={info.license_no} placeholder="Enter Lisence No"
                                    onChange={(e)=>{dispatch({type:'update', fld:'license_no', val:e.target.value})}}/>
                                    <div id="bdateerr" className="form-text"></div>
                                </div>
                                <div className="email">
                                    <label className="form__label" for="email">Email </label>
                                    <input  type="email" id="email" company_name="email" className="form__input" value={info.email} placeholder="Email"
                                    onChange={(e)=>{dispatch({type:'update', fld:'email', val:e.target.value})}}/>
                                    <div id="emailerr" className="form-text"></div>
                                </div>
                                <div className="contact_no">
                                    <label className="form__label" for="contact_no">Contact </label>
                                    <input  type="text" id="contact_no" company_name="contact_no" className="form__input" value={info.contact_no} placeholder="Contact"
                                    onChange={(e)=>{dispatch({type:'update', fld:'contact_no', val:e.target.value})}}/>
                                    <div id="contact_no_id" className="form-text"></div>
                                </div>
                                <div className="password">
                                    <label className="form__label" for="password">Password </label>
                                    <input className="form__input" type="password" company_name="password" id="password" value={info.password} placeholder="Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'password', val:e.target.value})}}/>
                                    <div id="passworderr" className="form-text"></div>
                                </div>
                                <div className="confirm-password">
                                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                                    <input className="form__input" type="password" company_name="confirmPassword" id="confirmPassword" value={info.confirmPassword} placeholder="Confirm Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'confirmPassword', val:e.target.value})}}/>
                                    <div id="confirmPassworderr" className="form-text"></div>
                                </div>
                                <div className="address">
                                    <label className="form__label" for="address">Address </label>
                                    <input className="form__input" type="text" company_name="address" id="confirmPassword" value={info.address} placeholder="Address"
                                    onChange={(e)=>{dispatch({type:'update', fld:'address', val:e.target.value})}}/>
                                    <div id="address" className="form-text"></div>
                                </div>
                            </div>
              </form>
              <div className="footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch({ type: 'reset' });
                    setMsg('');
                  }}
                >
                  Reset
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => {
                    sendData(e);
                  }}
                >
                  Register
                </button>
              </div>
              <div className="text-danger">{msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RegisteCompany };

