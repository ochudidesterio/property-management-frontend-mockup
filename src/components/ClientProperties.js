import React, { useState } from "react";
import AddButton from "./widgets/AddButton";
import PropertiesTable from "./widgets/PropertiesTable";
import AddPropertyModal from "./widgets/AddPropertyModal";
import { useSelector } from "react-redux";
import { getSelectedClient } from "../redux/clients/ClientsSlice";

const ClientProperties = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const client = useSelector(getSelectedClient);

  return (
    <div className="home">
      <div className="top">
        <h3>{client.firstName + "'s Property"}</h3>
        <AddButton onclick={handleShow} name={"Add Property"} />
      </div>
      <PropertiesTable />
      <AddPropertyModal open={showModal} onClose={handleClose} />
    </div>
  );
};

export default ClientProperties;
