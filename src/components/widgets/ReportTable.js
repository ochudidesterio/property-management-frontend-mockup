import React from "react";
import { useNavigate } from "react-router-dom";

const ReportTable = ({ data }) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
  };

  const thStyle = {
    backgroundColor: "#f2f2f2",
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
  };

  const trStyle = {
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    padding: "8px",
    textAlign: "left",
    transition: "background-color 0.3s ease-in-out", // Add transition effect for hover
  };

  const propertyStyle = {
    margin: "4px 0",
    padding: "4px",
    backgroundColor: "#ccc",
    cursor: "pointer",
    display:"flex",
  };
  const propertyCount = {
    marginLeft: "50px",
    fontSize:"20px"
    
  };
  const navigate = useNavigate()

  const handlePropertyClick = (propertyId) => {
    // Handle property click here, e.g. navigate to property details page
    console.log("Property clicked:", propertyId);
    navigate(`/property/${propertyId}`)
  };

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Client Name</th>
          <th style={thStyle}>Properties</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr
            key={item.id}
            style={trStyle}
            // onMouseOver={(e) => (e.target.style.backgroundColor = '#f9f9f9')}
            // onMouseOut={(e) => (e.target.style.backgroundColor = '#fff')}
          >
            <td style={tdStyle}>{item.firstName + " " + item.lastName}</td>
            <td style={tdStyle}>
              {item.properties.map((property) => (
                <React.Fragment key={property.id}>
                  <div
                    style={propertyStyle}
                    onClick={() => handlePropertyClick(property.id)}
                  >
                    <div>
                      <div>Property Name: {property.propertyName}</div>
                      <div>Location: {property.location}</div>
                    </div>
                    <div style={propertyCount}>
                        {property.houses.length} Houses
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
