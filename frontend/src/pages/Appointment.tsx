import axios from "axios";
import { useEffect, useState } from "react"

export async function Appointment(){
    const [listOfAppointments,setListOfAppointments] = useState([]);
    useEffect(async ()=>{
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL as string}/appointment/getappointments`);


    },[])
    return(
        <div>

        </div>
    )
}
