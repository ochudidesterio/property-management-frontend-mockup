import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./client.css";
import RoomsTable from "./widgets/RoomsTable";
import AddButton from "./widgets/AddButton";
import AddRoomModal from "./widgets/AddRoomModal";
import AddTenantModal from "./widgets/AddTenantModal";
import { getSelectedProperty } from "../redux/property/PropertySlice";
import Api from "../api/Api";
const PropertDetails = () => {
  const property = useSelector(getSelectedProperty);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showRoomModal, setShowRoomModal] = useState(false);
  const navigate = useNavigate();
  console.log("property", property.id);
  const houses = property.houses;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const [house, setHouse] = useState({
    type: "",
    name: "",
    rentAmount: 0.0,
    depositAmount: 0.0,
  });
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleCloseRoomModal = () => setShowRoomModal(false);
  const handleShowRoomModal = () => setShowRoomModal(true);

  const handleRowClick = (itemId) => {
    setSelectedItemId(itemId);
    handleShow();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Api.post("/tenant/create", formData)
      .then((res) => {
        Api.post(
          `/house/${selectedItemId}/add/tenant/${res.data.data.id}`,
          null
        );
      })
      .catch((e) => console.log(e));
    handleClose();
    window.location.reload();
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleHouseDataChange = (e) => {
    const { name, value } = e.target;
    setHouse((prev) => ({ ...prev, [name]: value }));
  };
  const handleHouseSubmit = (e) => {
    e.preventDefault();
    Api.post("/house/create", house)
      .then((res) => {
        Api.post(
          `/house/${res.data.data.id}/add/property/${property.id}`,
          null
        );
      })
      .catch((e) => console.log(e));
    handleCloseRoomModal();
    navigate(`/details/${property.id}`);
    window.location.reload();
  };

  return (
    <div className="home">
      <div className="top">
        <h3>{property.propertyName}</h3>
        <AddButton onclick={handleShowRoomModal} name={"Add Room"} />
      </div>
      <RoomsTable onClick={handleRowClick} houses={houses} />
      {/* Tenant Modal */}
      <AddTenantModal
        open={showModal}
        onClose={handleClose}
        onChange={handleInputChange}
        onSubmit={handleFormSubmit}
        formData={formData}
      />

      {/* Room modal */}
      <AddRoomModal
        open={showRoomModal}
        property={property}
        house={house}
        onChange={handleHouseDataChange}
        onClose={handleCloseRoomModal}
        onSubmit={handleHouseSubmit}
      />
    </div>
  );
};

export default PropertDetails;
