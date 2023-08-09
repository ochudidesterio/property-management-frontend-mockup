import React from 'react'
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const AddRoomModal = ({open,onClose,property,onSubmit,onChange,house}) => {
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
          <h2>Add Room to {property.propertyName}</h2>
          <form onSubmit={onSubmit}>
            <TextField
              label="Type"
              name="type"
              value={house.type}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name"
              name="name"
              value={house.name}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Rent"
              name="rentAmount"
              value={house.rentAmount}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Deposit"
              name="depositAmount"
              value={house.depositAmount}
              onChange={onChange}
              fullWidth
              margin="normal"
            />
            {/* <TextField
              label="Vacant"
              name="isVacant"
              value={house.isVacant}
              onChange={handleHouseDataChange}
              fullWidth
              margin="normal"
            /> */}

            <Button type="submit" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
  )
}

export default AddRoomModal