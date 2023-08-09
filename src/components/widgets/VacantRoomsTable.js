import React from 'react'

const VacantRoomsTable = ({data}) => {
  return (
    <>
    <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Rent</th>
            <th>Deposit</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
         {data.map(item => (
            <tr
              key={item.id}
              className="tableRow"
            >
              <td>{item.type}</td>
              <td>{item.rentAmount}</td>
              <td>{item.depositAmount}</td>
              <td>{item.isVacant ? "Vacant" : "Taken"}</td>

            </tr>
          ))} 
        </tbody>
      </table>
    </>
  )
}

export default VacantRoomsTable