import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import ViewPolicyDetails from "./ViewPolicyDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "../Logout";
import Viewpolicies from "../ViewPolicy";
import Viewpolicies2 from "../Viewpolicies2";

export default function CustHome(){
    return(
    <div className="App-header">
       <header className="text-white text-center py-3 bg-gray">
        <h1 className="text-success">You are logged in as Customer</h1>
      </header>

      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block bg-light sidebar">
            <div className="position-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    Logout
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/viewpolicydetails" className="nav-link">
                    View Policy Details
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/seemorepolicy" className="nav-link">
                   See More Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/buy" className="nav-link">
                   Buy Policy
                  </Link>
                </li>
                
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <Routes>
              <Route path="/" element={<Logout />} />
              <Route path="/viewpolicydetails" element={<ViewPolicyDetails />} />
              <Route path="/seepmoreolicy" element={<Viewpolicies/>} />
              <Route path="/buy" element={<Viewpolicies2/>} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}