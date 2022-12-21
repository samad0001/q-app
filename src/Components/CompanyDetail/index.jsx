import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { GetDataFromdb } from "../firebase"
import Tabel from "../table"


export default function CompanyDetail() {
   
    const [company, Setcompany] = useState()
    const navigate = useNavigate()
     const GetData = async ()=> {
        var details = await GetDataFromdb()
       
       
    
           

        Setcompany(details)


        
    }
    
    return (
        <div>
            <h2>Company Detail</h2>
            {/* <button onClick={GetData}>Get Data</button> */}
            <Tabel/>
        
          
        </div>
    )
}