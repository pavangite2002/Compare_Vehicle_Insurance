import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Logout from "../Logout";
import ViewCustomerList from "./ViewCustomerList";

import "bootstrap/dist/css/bootstrap.min.css";
import Viewcompany from "../Viewcompany";

export default function AdminHome() {
  return (
    <div className="App-header">


      <header className="text-white text-center py-3 bg-gray">
        <h1 className="text-success">You Are Logged in As Admin</h1>
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

                <li className="nav-item">
               <Link to="/registerascompany" class="nav-link">Company Registration</Link>
              </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            <Routes>
              <Route path="/" element={<Logout />} />
              <Route path="/viewcustomerlist" element={<ViewCustomerList />} />
              <Route path="/viewcompanylist" element={<Viewcompany />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
