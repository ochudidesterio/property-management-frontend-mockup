import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Tenants = () => {
  const[tenant,setTenants]=useState([])
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/tenant/all")
      .then((response) => {
        setTenants(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleRowClick = itemId => {
    navigate(`/tenant/${itemId}`);
  };
  return (
    <div className="home">
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Action</th>
            
          </tr>
        </thead>
        <tbody>
          {tenant.map(item => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              className="tableRow"
            >
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.phoneNumber}</td>
              <td>
                <button
                  className="rowButton"
                >
                  Invoice
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Tenants