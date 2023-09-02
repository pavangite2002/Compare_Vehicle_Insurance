import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Viewcompany() {
  const [companyDataList, setCompanyDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using Spring Booot Rest API 
    // fetch('http://localhost:8080/getallcompanies')


    fetch('https://localhost:7129/api/Companies') 
      .then(response => response.json())
      .then(data => {
        setCompanyDataList(data);
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
    <div className="container">
      <h2>Company Data Table</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>License Number</th>
          </tr>
        </thead>

        <tbody>
          {companyDataList.map((company, index) => (
            <tr key={index}>
              <td>{company.compId}</td>
              <td>{company.companyName}</td>
              <td>{company.email}</td>
              <td>{company.password}</td>
              <td>{company.address}</td>
              <td>{company.contactNo}</td>
              <td>{company.licenseNo}</td>
            </tr>
          ))}
        </tbody>

        {/* Using Spring Booot Rest API   */}
        {/* <tbody>
          {companyDataList.map((company, index) => (
            <tr key={index}>
              <td>{company.comp_id}</td>
              <td>{company.company_name}</td>
              <td>{company.email}</td>
              <td>{company.password}</td>
              <td>{company.address}</td>
              <td>{company.contact_no}</td>
              <td>{company.license_no}</td>
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

export default Viewcompany;
