import { useReducer, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login2(){


    const init = {
        email:"",
        password:""
    }

    const reducer = (state, action) => {
            switch(action.type)
            {
                case 'update':
                    return {...state , [action.fld]:action.val}
                case 'reset':
                    return init;    
            }
    }

    const[info, dispatch] = useReducer(reducer, init) ;
    const[msg, setMsg] = useState("");
    const navigate = useNavigate();

    const sendData=(e) =>{
        e.preventDefault();

        const reqOptions={
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify(info)
        }
        fetch("http://localhost:8080/checklogin",reqOptions)
        .then(resp=>resp.text())
        .then(text=>text.length ? JSON.parse(text):{})
        .then(obj => {
            if(Object.keys(obj).length === 0)
             {
                setMsg("Wrong Uid/Password");
                alert("Please Enter Uid & Password");
             }
             else
             {
                 
                 localStorage.setItem("loggedUser",JSON.stringify(obj));
                 
                        if(obj.user_type === 2)
                        {
                                navigate("/adminhome");
                        }
                        else if(obj.user_type === 0 )
                        {
                            navigate("/customerhome");
                        }
                        else if(obj.user_type === 1)
                        {
                            navigate("/companyhome");
                        }
                    
             }
        })
    }


    return(
        <div>
             <div className="container">
             <a className="btn btn-primary" href="/home">Home</a>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"> Email Address</label>
                  <input type="text" className="form-control" id="email" name="email" value={info.email}
                    onChange={(e)=> {dispatch({type:'update', fld:'email', val:e.target.value})}} /> 
                   
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label"> Password </label>
                  <input type="password" className="form-control" id="password" name="password" value={info.password}
                    onChange={(e)=> {dispatch({type:'update', fld:'password', val:e.target.value})}} /> 

                </div>
                
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" onClick={(e) => {sendData(e)}}>Login</button>
                  <span style={{ margin: '0 10px' }}></span> 
                 <button type="reset" className="btn btn-primary" onClick={() => {dispatch({type:'reset'})}}>Reset</button>
                </div>

              </form>
                 
              <div>{msg}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mt-3">
        <p>If you are a new user, <Link to="/registerascustomer" className="btn btn-primary">Register as a customer</Link>.</p>
      </div>
    </div>
    );
};