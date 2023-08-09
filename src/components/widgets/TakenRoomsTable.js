import React from 'react'

const TakenRoomsTable = ({data}) => {
  return (
    <>
    <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Type</th>
            <th>Room</th>
          </tr>
        </thead>
        <tbody>
         {data.map(item => (
            <tr
              key={item.id}
              className="tableRow"
            >
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.house.type}</td>
              <td>{item.house.name}</td>

            </tr>
          ))} 
        </tbody>
      </table>
    </>
  )
}

export default TakenRoomsTable