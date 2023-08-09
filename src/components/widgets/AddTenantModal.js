import React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddTenantModal = ({open,onClose,onSubmit,onChange,formData}) => {
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
          <h2>Add Tenant</h2>
          <form onSubmit={onSubmit}>
            <TextField
              fullWidth
              label="First Name"
              placeholder="Enter First Name"
              margin="normal"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
            />
            <TextField
              fullWidth
              label="Last Name"
              placeholder="Enter Last Name"
              margin="normal"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
            />
            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter phone number"
              margin="normal"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={onChange}
            />
            <Button variant="contained" type="submit">
              Save
            </Button>
          </form>
        </Box>
      </Modal>
  )
}

export default AddTenantModal