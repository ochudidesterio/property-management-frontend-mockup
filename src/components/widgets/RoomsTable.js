import React from 'react'

const RoomsTable = ({onClick,houses}) => {
  return (
    <table className="table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            <th>Rent Amount</th>
            <th>Deposit Amount</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {houses.map((item) => (
            <tr
              key={item.id}
             
              className="tableRow"
            >
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.rentAmount}</td>
              <td>{item.depositAmount}</td>
              <td>{item.isVacant ? "Vacant" : "Taken"}</td>
              <td>
                <button disabled={!item.isVacant}
                  onClick={() => onClick(item.id)}
                  className="rowButton"
                >
                  Add Tenant
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  )
}

export default RoomsTable