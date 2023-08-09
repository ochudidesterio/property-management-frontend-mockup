import React, { useEffect, useState } from "react";
import axios from "axios";


import "./home.css";
import AddButton from "../widgets/AddButton";
import ClientsTable from "../widgets/ClientsTable";
import AddClientModal from "../widgets/AddClientModal";
import { useDispatch } from "react-redux";
import { setClients } from "../../redux/clients/ClientsSlice";
const Clients = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/api/client/all")
      .then((response) => {
        dispatch(setClients(response.data.data))
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:8080/api/client/create", formData);
    handleClose();
    window.location.reload()
  };

  
  return (
    <div className="home">
      <div className="top">
        <h3>My Clients</h3>
        <AddButton onclick={handleShow} name={"Add Client"} />
      </div>
      <ClientsTable  />
      <AddClientModal
        open={showModal}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
        formData={formData}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Clients;
