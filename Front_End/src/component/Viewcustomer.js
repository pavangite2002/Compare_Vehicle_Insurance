import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Viewcustomer() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    // Using Spring Booot Rest API  
    // fetch('http://localhost:8080/getAllCustomers') 


    fetch('https://localhost:7129/api/Customers') 
      .then(response => response.json())
      .then(data => {
        setDataList(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Customer Data Table</h2>
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Date</th>
            {/* <th>Vehicle ID</th>
            <th>Vehicle Number</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Chassis Number</th>
            <th>Year of Manufacture</th>
            <th>Login ID</th>
            <th>Login Email</th>
            <th>User Type</th> */}
          </tr>
        </thead>

        <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.custId}</td>
              <td>{data.name}</td>
              <td>{data.contactNo}</td>
              <td>{data.email}</td>
              <td>{data.bdate}</td>
              {/* <td>{data.vinfo.v_id}</td>
              <td>{data.vinfo.vehicleNo}</td>
              <td>{data.vinfo.brand_name}</td>
              <td>{data.vinfo.model}</td>
              <td>{data.vinfo.chassis_no}</td>
              <td>{data.vinfo.year_of_manufacture}</td>
              <td>{data.login.id}</td>
              <td>{data.login.email}</td>
              <td>{data.login.user_type}</td> */}
            </tr>   
          ))}
        </tbody>


        {/* Using Spring Booot Rest API  */}
        {/* <tbody>
          {dataList.map((data, index) => (
            <tr key={index}>
              <td>{data.cust_id}</td>
              <td>{data.name}</td>
              <td>{data.contact_no}</td>
              <td>{data.email}</td>
              <td>{data.bdate}</td>
              <td>{data.vinfo.v_id}</td>
              <td>{data.vinfo.vehicle_no}</td>
              <td>{data.vinfo.brand_name}</td>
              <td>{data.vinfo.model}</td>
              <td>{data.vinfo.chassis_no}</td>
              <td>{data.vinfo.year_of_manufacture}</td>
              <td>{data.login.id}</td>
              <td>{data.login.email}</td>
              <td>{data.login.user_type}</td>
            </tr>   
          ))}
        </tbody> */}
        <tr>
            <td colSpan="15" className="text-center">
              <Link to="/adminhome" className="btn btn-secondary">Back</Link>
            </td>
          </tr>
      </table>
    </div>
  );
}

export default Viewcustomer;
