import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProfileCard from './ProfileCard'

const TenantProfile = () => {
    const [data,setData]=useState({})
    const {id}=useParams()
    useEffect(() => {
        axios
          .get(`http://127.0.0.1:8080/api/tenant/profile/${id}`)
          .then((response) => {
            setData(response.data.data);
            console.log(response.data.data)
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      }, [id]);
  return (
    <div className='home'>
        <ProfileCard data={data} />
    </div>
    
  )
}

export default TenantProfile