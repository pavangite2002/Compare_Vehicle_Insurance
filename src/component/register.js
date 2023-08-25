import React, {useReducer,useState} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate, Route,Routes,useNavigate } from 'react-router-dom';
// import { responsivePropType } from 'react-bootstrap/esm/createUtilityClasses';
function InsertUser() {

    const init={
        
        name:"",
        bdate:"",
        email:"",
        contact_no:"",
        password:"",
        confirmPassword:""
    }

    const reducer=(state,action) =>{
        switch(action.type)
        {
            case 'update':
                return {...state, [action.fld]:action.val}
            case 'reset':
                return init;
            default:
                return 0;
        }
    }

    const [info,dispatch]=useReducer(reducer,init);
    const [msg,setMsg]=useState("");

    const navigate=useNavigate();

    const sendData=(e)=>{
        e.preventDefault();
        const reqOpitions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                name:info.name,
                password:info.password,
                contact_no:info.contact_no,
                email:info.email,
                bdate:info.bdate,
                vinfo: {
                    vehicle_no: info.vehicle_no,
                    brand_name: info.brand_name,
                    model: info.model,
                    chassis_no: info.chassis_no,
                    year_of_manufacture: info.year_of_manufacture,
                },
                login: {
                    email: info.email,
                    pass: info.pass,
                    user_type:0
                }
            })
        }

        if(info.type===0)
        {
            fetch("http://localhost:8080/registerascustomer",reqOpitions)
            .then(resp => {
                if(resp.ok)
                {
                    <div>
                        <h3 className="text-success">Registration Successful...</h3>
                        <input className="btn btn-primary" type="button">go to login</input>
                    </div>
                    navigate("/login");
                }
                else{
                    setMsg("This user id already registered.");
                }
            }) 
        }
    }

    // const [isfarmer,setIsfarmer] = useState(false);
    // const [iswholesaler,setIswholesaler] = useState(false);
    // let selectedtype=(val)=>{
    //     info.type.value=val;
    // }

    return(
      
        <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title text-center">Register as Customer</h3>
                        <form>
                            <div className="form-body">
                               
                            <div className="name">
                                    <label className="form__label" for="name">Vehicle No </label>
                                    <input className="form__input" name="name" type="text" id="name" value={info.name} placeholder="First Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'name', val:e.target.value})}}/>
                                    <div id="cnameid" className="form-text"></div>
                                </div>
                                <div className="brand-name">
                                    <label className="form__label" for="brand-name">Brand Name </label>
                                    <select className="form__input" brand-name="brand-name" type="text" id="brand-name" value={info.brand_name} placeholder="Enter Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'brand-name', val:e.target.value})}}/>
                                        <option value="select" > Select</option>
                                        <option value="maruti-suzuki">Maruti Suzuki</option>
                                        <option value="tata">Tata</option>
                                        <option value="mahindra">Mahindra</option>
                                    <div id="brand-name" className="form-text"></div>
                                </div>

                                <div className="name">
                                    <label className="form__label" for="name">First Name </label>
                                    <input className="form__input" name="name" type="text" id="name" value={info.name} placeholder="First Name"
                                    onChange={(e)=>{dispatch({type:'update', fld:'name', val:e.target.value})}}/>
                                    <div id="cnameid" className="form-text"></div>
                                </div>
                               
                                <div className="bdate">
                                    <label className="form__label" for="bdate">Birth Date </label>
                                    <input type="date" id="bdate" name="bdate" className="form__input" value={info.bdate} placeholder="Birth Date"
                                    onChange={(e)=>{dispatch({type:'update', fld:'bdate', val:e.target.value})}}/>
                                    <div id="bdateerr" className="form-text"></div>
                                </div>
                                <div className="email">
                                    <label className="form__label" for="email">Email </label>
                                    <input  type="email" id="email" name="email" className="form__input" value={info.email} placeholder="Email"
                                    onChange={(e)=>{dispatch({type:'update', fld:'email', val:e.target.value})}}/>
                                    <div id="emailerr" className="form-text"></div>
                                </div>
                                <div className="contact_no">
                                    <label className="form__label" for="contact_no">Contact </label>
                                    <input  type="text" id="contact_no" name="contact_no" className="form__input" value={info.contact_no} placeholder="Contact"
                                    onChange={(e)=>{dispatch({type:'update', fld:'contact_no', val:e.target.value})}}/>
                                    <div id="contact_no_id" className="form-text"></div>
                                </div>
                                <div className="password">
                                    <label className="form__label" for="password">Password </label>
                                    <input className="form__input" type="password" name="password" id="password" value={info.password} placeholder="Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'password', val:e.target.value})}}/>
                                    <div id="passworderr" className="form-text"></div>
                                </div>
                                <div className="confirm-password">
                                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                                    <input className="form__input" type="password" name="confirmPassword" id="confirmPassword" value={info.confirmPassword} placeholder="Confirm Password"
                                    onChange={(e)=>{dispatch({type:'update', fld:'confirmPassword', val:e.target.value})}}/>
                                    <div id="confirmPassworderr" className="form-text"></div>
                                </div>

                            </div>
                        </form>
                        <div class="footer">
                            <button type="button" className="btn btn-primary" onClick={()=>{dispatch({type:'reset'})}}>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-primary" onClick={(e)=>{ sendData(e)}} >Register</button>
                        </div>
                        <div>{msg}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>      
    )       
}


export {InsertUser};