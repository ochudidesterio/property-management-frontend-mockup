import React, { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getSelectedClient } from "../../redux/clients/ClientsSlice";
import { setSelectedProperty } from "../../redux/property/PropertySlice";
import { useNavigate } from "react-router-dom";
import Api from "../../api/Api";

const PropertiesTable = () => {
  const client = useSelector(getSelectedClient);
  const [properties, setProperties] = useState([]);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleRowClick = (item) => {
    dispatch(setSelectedProperty(item))
    navigate(`/details/${item.id}`);
  };
  useEffect(() => {
    const fetchClientProperties = () => {
      Api.get(`/client/${client.id}`)
        .then((response) => {
          setProperties(response.data.data.properties);
        })
        .catch((e) => console.log(e));
    };
    fetchClientProperties()
  }, [client.id]);
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Property Name</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {properties.map((item) => (
          <tr
            key={item.id}
            onClick={() => handleRowClick(item)}
            className="tableRow"
          >
            <td>{item.propertyName}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PropertiesTable;
