import React from 'react'
import Button from "@mui/material/Button";


const AddButton = ({onclick, name}) => {
  return (
    <Button
    type="submit"
    onClick={onclick}
    variant="contained"
    color="primary"
  >
    {name}
  </Button>
  )
}

export default AddButton