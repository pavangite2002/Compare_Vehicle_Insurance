import { useEffect, useState } from "react"

export default function Buypolicy()
{
    const[plan,setPlan]=useState([]); 
    useEffect(()=>{
        
        const objs=JSON.parse(localStorage.getItem("chosenPlan"))
        setPlan(objs);
        const planid=objs.plan_id;
        const compid=objs.company.login.id;
        //const compid=objs.company.comp_id;
        // console.log(planid,compid)
        //  fetch(`http://localhost:8080/getplanid?pid=${planid}&cid=${compid}`)
        // .then(resp=>resp.json())
        // .then(obj=>{
        //         setPlan(obj);
        // })
    },[])
    
    return(
        <div className="container">
            <table className="table">
          <thead>
            <tr>
              {/* <th>Company Name</th> */}
              <th>Plan Name</th>
              <th>Description</th>
              <th>Total Premium</th>
            </tr>
          </thead>
          <tbody>
           
              <tr>
                {/* <td>{plan.company.company_name}</td> */}
                <td>{plan.plan_name}</td>
                <td>{plan.description}</td>
                <td>{plan.premium_amount}</td>
                <td>
                  <button className="btn btn-primary" type="button">Procced to Payment</button>
                </td>
              </tr>
          </tbody>
        </table>
      
        </div>
    )
}