import React from "react"
import { useNavigate } from "react-router-dom"
import Router from '../../../views/router'

export default function Company(){
const Navigate = useNavigate()
  
  
  
  
  
  
  
  
  
  
    return(

<div>
    
<div className="child">
            {/* <Router/> */}
        <h1>Are You a Company ? </h1>
        <button className="btn-2" onClick={()=> Navigate('/form')}>Click Here to Register</button>
     
    
 </div>
 <div className="child">
            {/* <Router/> */}
        <h1>Are You Waiting for Tokens</h1>
        <button className="btn-2" onClick={()=> Navigate('/')}>Click Here</button>
     
    
 </div>
</div>

        )
}