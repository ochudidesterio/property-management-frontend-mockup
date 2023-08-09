import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import TakenRoomsTable from "./widgets/TakenRoomsTable";
import VacantRoomsTable from "./widgets/VacantRoomsTable";

const PropertyInfo = () => {
  const [data, setData] = useState([]);
  const[vacants,setVacants]=useState([])
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8080/api/property/info/${id}`)
      .then((response) => {
        setData(response.data.data.tenants);
        setVacants(response.data.data.vacants);
        console.log(response.data.data.tenants);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  console.log(data.tenants);

  return (
    <div className="home">
      <div className="info">Taken</div>
      <TakenRoomsTable data={data} />
      <div className="info">Vacant</div>
      <VacantRoomsTable data={vacants}/>
    </div>
  );
};

export default PropertyInfo;
