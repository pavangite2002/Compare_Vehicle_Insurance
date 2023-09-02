import './App.css';
import { Link, Route,Routes, useLocation } from 'react-router-dom';

import Login2 from './component/Login2';
import AdminHome from './component/adminComponents/AdminHome';
import { RegisteCompany } from './component/RegisterCompany';
import Register2 from './component/Register2';
import CustHome from './component/customerComponents/CustHome';
import CompHome from './component/companyComponents/CompHome';
import Home from './component/Home';
import Viewpolicies from './component/ViewPolicy';
import Viewcustomer from './component/Viewcustomer';
import Viewcompany from './component/Viewcompany';
import AddPlans from './component/companyComponents/AddPlans';
import CompanyContacts from './component/Contact';
import Loginsuccess from './component/loginsuccess';
import Welcome from './component/welcomeinfo';
import Viewpolicies2 from './component/Viewpolicies2';
import Buypolicy from './component/BuyPolicy';
import FooterComp from './component/Footer';




function App() {

  const location = useLocation();

  const hiddenRoutes = ['/login','/registerascustomer','/adminhome','/customerhome','/companyhome','/welcome','/loginsuccess','/buy','/viewcompanylist','/viewcustomerlist','/registerascompany','/viewpolicy','/buypolicy'];

  const shouldShowNavBar = !hiddenRoutes.includes(location.pathname);

  return (
    <div className="App-header">
      <header className="App-header custom-header">
      <h1 className="display-4">Compare Vehicle Insurance</h1>
    </header>
    {shouldShowNavBar&&(

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
            </ul>
          </div>
        </nav>
        <Welcome/>
        </div>
        )}
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
          <Route path='/seemorepolicy'  element={<Viewpolicies/>} />
          <Route path='/viewcustomerlist'  element={<Viewcustomer/>} />
          <Route path='/viewcompanylist' element={<Viewcompany/>} />
          <Route path='/addplans' element={<AddPlans/>} />
          <Route path='/contactus' element={<CompanyContacts/>} />
          <Route path='/loginsuccess' element={<Loginsuccess/>} />
          <Route path='/buy' element={<Viewpolicies2/>} />
          <Route path='/buypolicy' element={<Buypolicy/>} />
        
        </Routes>
        </div>

        <FooterComp/>    
    </div>

  );
}

export default App;