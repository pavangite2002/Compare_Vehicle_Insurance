import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "../Logout";
import ViewCustomerAccToCompany from "./ViewCustomer";
import AddPlans from "./AddPlans";

export default function CompHome(){
    return(
        <div>
            <div className="App-header">
      <header className="text-white text-center py-3 bg-gray">
        <h1 className="text-success">You are logged in as Company</h1>
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
                  <Link to="/addplans" className="nav-link">
                    Add Plans
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/viecustacctocomp" className="nav-link">
                    View Customer List
                  </Link>
                </li>

               
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <Routes>
              <Route path="/" element={<Logout />} />
              {/* <Route path="/viewcustomerlist" element={<ViewCustomerList />} /> */}
              <Route path="/viecustacctocomp" element={<ViewCustomerAccToCompany />} />
              <Route path="/addplans" element={<AddPlans/>} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
        </div>
    );
};