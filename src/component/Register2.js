
import { useReducer , usedata} from "react";
import {  useNavigate, Outlet } from "react-router-dom";

export default function Register2(){

        const init = {
            vehicle_no:{value:"",touched:false,valid:false,error:""},
            brand_name:{value:"",touched:false,valid:false,error:""},
            model:{value:"",touched:false,valid:false,error:""},
            chassis_no:{value:"",touched:false,valid:false,error:""},
            year_of_manufacture:{value:"",touched:false,valid:false,error:""},
            name:{value:"",touched:false,valid:false,error:""},
            password:{value:"",touched:false,valid:false,error:""},
           // cpassword:{value:"",touched:false,valid:false,error:""},
            contact_no:{value:"",touched:false,valid:false,error:""},
            email:{value:"",touched:false,valid:false,error:""},
            bdate:{value:"",touched:false,valid:false,error:""},

            formvalid:false
            
        }
        
    
        const validateData = (name,value) => {
            let valid = false;
            let error = "";
            switch(name) {
                case 'vehicle_no': var pattern = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/
                                  if(pattern.test(value))
                                  {
                                     valid = true;
                                     error = "";
                                  }
                                  else
                                  {
                                     valid = false;
                                     error = "Invalid No"
                                  }
                                  break;
                case 'chassis_no':  var pattern = /^[0-9]{6}$/
                                    if(pattern.test(value))
                                    {
                                    valid = true;
                                    error = "";
                                    }
                                    else
                                    {
                                    valid = false;
                                    error = "chassis_no invalid"
                                    }
                                  break;
                case 'name':
                                 var pattern = /^[A-Za-z]{2,}$/
                                  if(pattern.test(value) )
                                  {
                                    valid = true;
                                    error = "";
                                  } 
                                  else
                                  {
                                    valid = false;
                                    error = "Invalid name "
                                  }     
                                break;
                case 'password':  var pattern = /^[A-Za-z][0-9]{2,}$/
                                if(pattern.test(value))
                                {
                                valid = true;
                                error = "";
                                }
                                else
                                {
                                valid = false;
                                error = "Password invalid"
                                }
                              break;
                // case 'cpassword':
                //                     if(info.password.value === value)
                //                      {
                //                         valid = true;
                //                          error = "";
                //                      } 
                //                     else
                //                      {
                //                         valid = false;
                //                         error = "Passwords do not match"
                //                      }     
                //                         break;    
                 case 'email':     var pattern = /^[A-Za-z0-9_.-]{3,15}@gmail.com$/
                                        if(pattern.test(value))
                                        {
                                          valid = true;
                                          error = "";
                                        }
                                        else
                                        {
                                          valid = false;
                                          error = "Email invalid"
                                        }
                                        break;              
                }                  
            return {valid, error};
        }
        // const navigate=useNavigate();
        const reducer=(data,action)=> {
            switch(action.type)
            {
                case 'update':
                    const {name, value, touched, valid,error,formvalid} = action.data
                    //console.log(formvalid)
                    return {...data, [name]: {value, touched, valid, error}, formvalid }
                    //return {...data,[action.fld]:action.val}
                case 'reset':
                    return init;
            }
            
        }
    
        const handleChange = (name,value) => {
            const {valid,error} = validateData(name,value)
            let formvalid = true;
            /*if(data.firstName.valid === true && data.lastName.valid === true && data.model.valid === true && data.chassis_no.valid === true && data.confirmchassis_no.valid === true)
                formvalid = true;*/
            for(const key in info)
            {
                console.log(key+" : "+info[key].valid )
                if(info[key].valid === false)
                {
                    formvalid = false;
                    break;
                }
            }  
            console.log(formvalid)  
            dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
        }
    
        const onFocusout = (name,value) => {
            const {valid,error} = validateData(name,value)
            let formvalid = true;
           //if(data.firstName.valid === true && data.lastName.valid === true && data.model.valid === true && data.chassis_no.valid === true && data.confirmchassis_no.valid === true)
                formvalid = true;
            for(const key in info)
            {
                console.log(key+" : "+info[key].valid )
                if(info[key].valid === false)
                {
                    formvalid = false;
                    break;
                }
            }  
            dispatch({type: 'update', data: {name,value,touched: true, valid, error,formvalid} })
        }
    
    
            const [info,dispatch]=useReducer(reducer,init);
            //const [msg,setMsg]=usedata("");
            const navigate= useNavigate();
    
            const sendData=(e) =>{
                e.preventDefault();
    
                const reqOptions={
                    method:'POST',
                    mode: 'cors',
                    headers:{'content-type':'application/json'},
                    
                    body:JSON.stringify({
                                       vehicle_no:info.vehicle_no.value,
                                        brand_name:info.brand_name.value,
                                        model:info.model.value,
                                        chassis_no:info.chassis_no.value,
                                        year_of_manufacture:info.year_of_manufacture.value,
                                        name:info.name.value,
                                        password:info.password.value,
                                       
                                        contact_no:info.contact_no.value,
                                        email:info.email.value,
                                        bdate:info.bdate.value,
                                        
                                    })
                }
                fetch("http://localhost:8080/registerascustomer",reqOptions)
                .then(resp=>{
                    // console.log("data send");
                    // alert("Registration Successful...");
                    
                    if(resp.ok)
                    {
                        <div>
                            <h3 className="text-success">Registration Successful...</h3>
                        <input className="btn btn-primary" type="button">go to login</input>
                        </div>
                        navigate("/viewpolicy");
                    }
                    else{
                        alert("already Registered");
                    }
                });                                               
            }
    
        return(
        <div className="doc">
                <br/>
                <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                  <div class="container h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div class="card" >
                          <div class="card-body p-5">
                            <h2 class="text-uppercase text-center mb-5">Customer Registration Form</h2>
            
            <form action="">
                <div class="mb-3 mt-3">
                    <label for="vehicle_no" class="form-label">Vehicle No:</label>
                    <input type="text" class="form-control" id="vehicle_no" placeholder="Enter Vehicle No"  name="vehicle_no" value={info.vehicle_no.value}
                
                    onChange={(e)=>handleChange("vehicle_no",e.target.value)}/>
                    <div className="error-msg"> {info.vehicle_no.error}</div> 
                    
                </div>
    
                {/* <div class="mb-3">
                    <label for="brand_name" class="form-label">Brand Name:</label>
                    <input type="text" class="form-control" id="brand_name" placeholder="Enter Brand Name"  name="brand_name" value={info.brand_name.value}
                   
                    onChange={(e)=>handleChange("brand_name",e.target.value)}/>
                    <div className="error-msg"> {info.brand_name.error}</div> 
                </div> */}
    
                <div class="mb-3">
                 <label for="brand_name" class="form-label">Brand Name:</label>
                <select class="form-control" id="brand_name" name="brand_name" value={info.brand_name.value} 
                 onChange={(e) => handleChange("brand_name", e.target.value)}>
                <option value="">Select Brand Name</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                 <option value="Ford">Ford</option>
                {/* Add more options for other car brands */}
                </select>
                <div class="error-msg">{info.brand_name.error}</div>
                </div>

                <div class="mb-3">
                    <label for="model" class="form-label">Model :</label>
                    <input type="text" class="form-control" id="model" placeholder="Enter model..."  name="model" value={info.model.value}
                     
                     onChange={(e)=>handleChange("model",e.target.value)}/>
                     <div className="error-msg"> {info.model.error}</div> 
                </div>

                <div class="mb-3">
                <label for="chassis_no" class="form-label">Chassis No:</label>
                <input type="number" class="form-control" id="chassis_no" placeholder="Enter chesis no" name="chassisNo" value={info.chassis_no.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("chassis_no",e.target.value)}/>
                <div className="error-msg"> {info.chassis_no.error}</div> 
            </div>
    
            <div class="mb-3">
                <label for="year_of_manufacture" class="form-label">year_of_manufacture :</label>
                <input type="text" class="form-control" id="year_of_manufacture" placeholder="0000-00-00" name="chassisNo" value={info.year_of_manufacture.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("year_of_manufacture",e.target.value)}/>
                <div className="error-msg"> {info.year_of_manufacture.error}</div> 
            </div>

            <div class="mb-3">
                <label for="name" class="form-label">Name :</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Name" name="chassisNo" value={info.name.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("name",e.target.value)}/>
                <div className="error-msg"> {info.name.error}</div> 
            </div>
                
            <div class="mb-3">
                <label for="password" class="form-label">Password :</label>
                <input type="password" class="form-control" id="name" placeholder="Enter Name" name="password" value={info.password.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("password",e.target.value)}/>
                <div className="error-msg"> {info.password.error}</div> 
            </div>


                {/* <div class="mb-3">
                <label for="cpassword" class="form-label">Confirm Password.:</label>
                <input type="password" class="form-control" id="cpassword" placeholder="Enter password"  name="cpassword" value={info.cpassword.value}
                 
                 onChange={(e)=>handleChange("password",e.target.value)}/>
                 <div className="error-msg"> {info.cpassword.error}</div> 
            </div> */}

            <div class="mb-3">
                    <label for="contact_no" class="form-label">Contact No.:</label>
                    <input type="number" class="form-control" id="contact_no" placeholder="Enter contact no..."  name="contact_no" value={info.contact_no.value}
                    
                    onChange={(e)=>handleChange("contact_no",e.target.value)}/>
                    <div className="error-msg"> {info.contact_no.error}</div> 
                </div>

            <div class="mb-3">
                <label for="email" class="form-label">email :</label>
                <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" value={info.email.value}
                // onChange={(e)=>{dispatch({type:'update',fld:'email',val:e.target.value})}}/>
                onChange={(e)=>handleChange("email",e.target.value)}/>
                <div className="error-msg"> {info.email.error}</div> 
            </div>

                <div class="mb-3">
                    <label for="bdate" class="form-label">Date Of Birth.:</label>
                    <input type="text" class="form-control" id="bdate" placeholder="0000-00-00"  name="name" value={info.bdate.value}
                    
                    onChange={(e)=>handleChange("bdate",e.target.value)}/>
                    <div className="error-msg"> {info.bdate.error}</div> 
                </div>

                {/*<button type="submit" class="btn btn-primary" disabled={info.formvalid?false:true} onClick={(e)=>{sendData(e)}}>Submit</button>*/}
                

                <div className="text-center">
                 <button type="button" className="btn btn-primary" onClick={(e) => {sendData(e)}}>Register</button>
                 <span style={{ margin: '0 10px' }}></span> 
                 <button type="reset" className="btn btn-primary" onClick={() => {dispatch({type:'reset'})}}>Clear</button>
                </div>

            </form>
            </div>
                         </div>
                      </div>
                    </div>
                 </div>
                 
              </div>
         {/* <p>{JSON.stringify(info)}</p> */}
            
            </div>
    
    );
};