
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Viewpolicies() {
    const [plan, setPlan] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/getPlanDetails")
            .then(resp => resp.json())
            .then(obj => {
                setPlan(obj);
            });
    }, []);

    const groupedPlans = {};
    plan.forEach(app => {
        const companyName = app.company.company_name;
        if (!groupedPlans[companyName]) {
            groupedPlans[companyName] = [];
        }
        groupedPlans[companyName].push(app);
    });

    const navigate = useNavigate();

    const setComp = (comp) => {
        fetch("http://localhost:8080/getPlanId?plan_id=" + comp.plan_id)
            .then(resp => resp.json())
            .then(data => {
                const planId = data.plan_id;
                localStorage.setItem('selectedPlanId', planId); // Store plan_id in localStorage
                navigate("/BuyPolicy");
            })
            .catch(error => {
                console.error("Error fetching plan_id:", error);
            });
    }

    return (
        <div className="container">
            <h1 className="mt-5">Company Policy Details</h1>
            <table className="table table-bordered mt-4">
                <thead>
                    <tr>
                        <th>Company Name</th>
                        <th>Plan Name</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Coverage Type</th>
                        <th>Premium Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(groupedPlans).map(companyName => (
                        <React.Fragment key={companyName}>
                            <tr>
                                <td colSpan="7" className="table-primary"><strong>{companyName}</strong></td>
                            </tr>
                            {groupedPlans[companyName].map(app => (
                                <tr key={app.id}>
                                    
                                    <td>{app.company.company_name}</td>
                                    <td>{app.plan_name}</td>
                                    <td>{app.description}</td>
                                    <td>{app.duration}</td>
                                    <td>{app.coverage_type}</td>
                                    <td>{app.premium_amount}</td>
                                    
                                    <td>
                                        <button className="btn btn-primary" onClick={() => setComp(app)}>Select</button>
                                    </td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
{/*
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

export default function Viewpolicies(){

   //const pid=localStorage.getItem("viewId");
    const[plan,setPlan]=useState([]); 
    useEffect(()=>{

        // fetch("http://localhost:8080/getPatientByPId?patient_id="+pid)
         fetch("http://localhost:8080/getPlanDetails")
        .then(resp=>resp.json())
        .then(obj=>{
                setPlan(obj);
        })
    },[])


    const setComp = (comp) => {
        fetch("http://localhost:8080/getPlanId?plan_id=" + comp.plan_id)
            .then(resp => resp.json())
            .then(data => {
                // Assuming the response contains plan_id
                const planId = data.plan_id;
                localStorage.setItem('selectedPlanId', planId); // Store plan_id in localStorage
                navigate("/BuyPolicy");
            })
            .catch(error => {
                console.error("Error fetching plan_id:", error);
            });
    }
    
    //const[comp,setComp]=useState([]); 
//     const navigate=useNavigate();
//    const setComp=((comp)=>{

//          fetch("http://localhost:8080/getPlanId?="+comp.plan_id)
//         .then(resp=>resp.json())
//         .then(()=>{navigate("/BuyPolicy")})  
                
//         })
    
     
    const groupedPlans = {};
    plan.forEach(app => {
        const companyName = app.company.company_name;
        if (!groupedPlans[companyName]) {
            groupedPlans[companyName] = [];
        }
        groupedPlans[companyName].push(app);
    });

    // const setStorage = (selectedPlan) => {
    //     localStorage.setItem('chosenPlan', JSON.stringify(selectedPlan));
    //     alert('Plan chosen and stored in localStorage!');
    // };//onClick={() => setStorage(app)}
      
      //const setStorage=(e)=>{
    //     localStorage.setItem("viewId",e);
    //   }
    return(
        
        <div>
        <h1 className="fon">Company Policy Details</h1>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Plan Name</th>
                    <th>Description</th>
                    <th>Duration</th>
                    <th>Coverage Type</th>
                    <th>Premium Amount</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(groupedPlans).map(companyName => (
                    <React.Fragment key={companyName}>
                        <tr>
                            <td colSpan="7"><strong>{companyName}</strong></td>
                        </tr>
                        {groupedPlans[companyName].map(app => (
                            <tr key={app.id}>
                                <td>{app.company.company_name}</td>
                                <td>{app.plan_name}</td>
                                <td>{app.description}</td>
                                <td>{app.duration}</td>
                                <td>{app.coverage_type}</td>
                                <td>{app.premium_amount}</td>
                                <td>
                                    <button type="submit"  >Select</button>
                                </td>
                            </tr>
                        ))}
                    </React.Fragment>
                ))}
            </tbody>
        </table>
    </div>    
            
    )
}
*/ }




