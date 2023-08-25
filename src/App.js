import './App.css';
import { Link, Route,Routes } from 'react-router-dom';

import Login2 from './component/Login2';
import AdminHome from './component/adminComponents/AdminHome';
import { RegisteCompany } from './component/RegisterCompany';
import Register2 from './component/Register2';
import CustHome from './component/customerComponents/CustHome';
import CompHome from './component/companyComponents/CompHome';
import Home from './component/Home';
import Viewpolicies from './component/ViewPolicy';
import BuyPolicy from './component/customerComponents/BuyPolicy';
import Viewcustomer from './component/Viewcustomer';




function App() {
  return (
    <div className="App-header">
      <header className="App-header custom-header">
      <h1 className="display-4">Compare Vehicle Insurance</h1>
    </header>
        {/* <Routes>
          <Route path="/farmer_home" element={<FarmerModulePage/>}/>
          <Route path="/admin_home" element={<Admin/>}/>
        </Routes> */}
        <div className='container-fluid'>
        <nav className="navbar navbar-expand-md bg-light" >
          <div className="container ">
            <ul className="navbar-nav">
               <li className="nav-item">
                <Link to="/home" class="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/login" class="nav-link">Login</Link>
              </li>

              <li className="nav-item">
               <Link to="/registerascustomer" class="nav-link">Register as Customer</Link>
              </li>

              <li className="nav-item">
               <Link to="/registerascompany" class="nav-link">Register as Company</Link>
              </li>
            </ul>
          </div>
        </nav>
        </div>
        <div className="main-content container my-20" >
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path="/login" element={<Login2/>}/>
          <Route path="/registerascustomer" element={<Register2/>}/>
          <Route path='/registerascompany' element={<RegisteCompany/>} />
          <Route path='/adminhome' element={<AdminHome/>} />
          <Route path='/companyhome' element={<CompHome/>} />
          <Route path='/customerhome' element={<CustHome/>}/>
          <Route path='/viewpolicy' element={<Viewpolicies/>} />
          <Route path='/BuyPolicy'  element={<BuyPolicy/>} />
          <Route path='/seemorepolicy'  element={<Viewpolicies/>} />
          <Route path='viewcustomerlist'  element={<Viewcustomer/>} />
        </Routes>
        </div>
        
        {/* <footer className="bg-dark text-white text-center py-3" >
        <p>&copy; 2023 Compare Vehicle Insurance. All rights reserved.
          <br></br>
          Created By : Pavan Gite | Chetan Bavane | Ganesh Savant | Vaibhav Jadhav   
      </p>
    </footer> */}

    <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2023 Compare Vehicle Insurance. All rights reserved.<br/>
      Created By : Pavan Gite | Chetan Bavane | Ganesh Savant | Vaibhav Jadhav   
    </p>
  </footer>
        
    </div>

  );
}

export default App;