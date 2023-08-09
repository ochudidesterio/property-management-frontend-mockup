import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { getSelectedClient } from "../../redux/clients/ClientsSlice";
import Api from "../../api/Api";

const AddPropertyModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    propertyName: "",
    location: "",
  });
  const client = useSelector(getSelectedClient);
  console.log(client.id);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createPropertyAndAttachClient();
    onClose();
  };
  const createPropertyAndAttachClient = () => {
    Api.post("/property/create", formData)
      .then((res) => {
        Api.post(
          `/property/${res.data.data.id}/add/client/${client.id}`,
          null
        ).then((r) => {
          if (r.status === 200) {
            window.location.reload();
          }
        });
      })
      .catch((e) => console.log(e));
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 300, p: 2, bgcolor: "background.paper" }}>
        <h2>Add Property to {client.firstName}</h2>
        <form onSubmit={handleFormSubmit}>
          <TextField
            fullWidth
            label="Property Name"
            placeholder="Enter Name"
            margin="normal"
            name="propertyName"
            value={formData.propertyName}
            onChange={handleInputChange}
          />
          <TextField
            fullWidth
            label="Location"
            placeholder="Enter Location"
            margin="normal"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />

          <Button variant="contained" type="submit">
            Save
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddPropertyModal;
