import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Viewpolicies2(){

    const[plans,setPlan]=useState([]); 
    useEffect(()=>{

         fetch("http://localhost:8080/getPlanDetails")
        .then(resp=>resp.json())
        .then(obj=>{
                setPlan(obj);
        })
    },[])
   
    const navigate=useNavigate();

    const setStorage = (selectedPlan) => {
        localStorage.setItem('chosenPlan', JSON.stringify(selectedPlan));
        {navigate("/buypolicy")}
    };
    
    return(
        
        <div className="container">
        <h1>Available Plans</h1>
        <table className="table">
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
            {plans.map((plan) => (
              <tr key={plan.plan_id}>
                <td>{plan.company.company_name}</td>
                <td>{plan.plan_name}</td>
                <td>{plan.description}</td>
                <td>{plan.duration} year</td>
                <td>{plan.coverage_type}</td>
                <td>₹{plan.premium_amount}</td>
                <td>
                  <button className="btn btn-primary" type="button" onClick={()=>setStorage(plan)}>Buy Policy</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>     
            
    )
}