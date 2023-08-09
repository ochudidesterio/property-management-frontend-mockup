import React,{useState,useEffect}from 'react'
import axios from "axios"
import ReportTable from '../widgets/ReportTable'

const Reports = () => {
    const[data,setData] = useState([])
    useEffect(() => {
      axios
        .get("http://127.0.0.1:8080/api/client/all")
        .then((response) => {
          setData(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, []);
   
  return (
    <div className='home'>
        <ReportTable data={data} />
        </div>
  )
}

export default Reports