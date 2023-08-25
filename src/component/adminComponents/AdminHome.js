import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logout from "../Logout";
import ViewCustomerList from "./ViewCustomerList";
import ViewCompanyList from "./ViewCompanyList";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminHome() {
  return (
    <div className="App-header">
      <header className="text-white text-center py-3 bg-dark">
        <h1 className="text-success">Compare Vehicle Insurance</h1>
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
                  <Link to="/viewcustomerlist" className="nav-link">
                    View Customer List
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/viewcompanylist" className="nav-link">
                    View Company List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <Routes>
              <Route path="/" element={<Logout />} />
              <Route path="/viewcustomerlist" element={<ViewCustomerList />} />
              <Route path="/viewcompanylist" element={<ViewCompanyList />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
