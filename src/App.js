import React from "react";
import css from './App.css'
import Router from './views/router'
import Company from "./Components/firebase/Company";
import Header from "./Components/Header";
import store from "./store";
import { Provider } from "react-redux";
const App = () => {
  // useEffect(()=>{
  //   {console.log('Hello')}
  //   <div>


  //   </div>




  return (
    <Provider store={store} >


    <div className="parent">







      <Header />

      < Router />
    </div>
    </Provider>

  )
}

export default App;
