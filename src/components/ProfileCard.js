import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './profilecard.css'

const ProfileCard = ({ data }) => {
  return (
    <Card className='pcard'>
      <CardContent>
        <Typography variant="h6" className='ptitle'>
          {data.firstName} {data.lastName}
        </Typography>
        <Typography variant="body1" color="textSecondary" className='ptext'>
          Phone Number: {data.phoneNumber}
        </Typography>
        <Typography variant="body1" color="textSecondary" className='ptext'>
          Property Name: {data.propertyName}
        </Typography>
        <Typography variant="body1" color="textSecondary" className='ptext'>
          House Type: {data.houseType}
        </Typography>
        <Typography variant="body1" color="textSecondary" className='ptext'>
          House Name: {data.houseName}
        </Typography>
        <Typography variant="body1" color="textSecondary" className='ptext'>
          Rent Amount: {data.rentAmount}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Deposit Amount: {data.depositAmount}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
