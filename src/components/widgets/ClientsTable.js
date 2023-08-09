import React from "react";
import { useSelector } from "react-redux/es/exports";
import { getAllClients } from "../../redux/clients/ClientsSlice";
import { useNavigate } from "react-router-dom";
import { setSelectedClient } from "../../redux/clients/ClientsSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

const ClientsTable = () => {
  const clients = useSelector(getAllClients);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleRowClick = (client) => {
    dispatch(setSelectedClient(client))
    navigate(`/client/${client.id}`);
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((item) => (
          <tr
            key={item.id}
            onClick={() => handleRowClick(item)}
            className="tableRow"
          >
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientsTable;
