import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Company from "../../Components/firebase/Company";
import Form from '../../Components/Form'
import CompanyDetail from "../../Components/CompanyDetail";
import Home from "../../Components/Home";
import Token from "../../Components/Token";

const router = createBrowserRouter([
   
    
  
  {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/Company",
      element: <Company/>,
    },
    {
      path: "/form",
      element: <Form/>,
    },  {
      path: "/companyDetail",
      element: <CompanyDetail/>,
    },{
      path: "/token",
      element: <Token/>,
    }
  ]);
  
export default  function Router(){
    return(
        <RouterProvider router={router} />

    )
  }
  
  
  
  
  