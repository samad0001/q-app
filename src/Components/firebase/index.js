// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { useState } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyBYATYUmmFiCffz3pEob01XtL1_NlqMoBw",
  authDomain: "facebook-login-b8d70.firebaseapp.com",
  projectId: "facebook-login-b8d70",
  storageBucket: "facebook-login-b8d70.appspot.com",
  messagingSenderId: "72957352072",
  appId: "1:72957352072:web:d7cc667f026fc00162e73d",
  measurementId: "G-2JQB9GWD3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getFirestore(app);







// async function GetDataFromdb() {

//   try {
//     const querySnapshot = await getDocs(collection(db, "companies"));
//     querySnapshot.forEach((doc) => {
//       // dataBank.push(`${doc.id} => ${JSON.stringify(doc.data())}`)
//       dataBank.push(doc.data(), doc.id)
//       console.log(dataBank)
//       Press()

//     })

//   } catch (error) {
//     alert(error.message)
//   }




export default function SignIn() {



  const provider = new FacebookAuthProvider();
  provider.addScope('user_birthday');

  auth.languageCode = 'it';




  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
      console.log('hello jani kam hugya hay')
      window.location.href = '/Company'








      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    })
    ;


}

function addCompanyToDb(user) {
  const { name, since, url, timming } = user
  return addDoc(collection(db, "companies"), { name, since, url, timming })

}

// 
// const [users, setusers] = useState([])

async function GetDataFromdb() {
  const dataBank = []
  try {
    const querySnapshot = await getDocs(collection(db, "companies"));
    querySnapshot.forEach((doc) => {
      // dataBank.push(`${doc.id} => ${JSON.stringify(doc.data())}`)
      dataBank.push(doc.data())
      // console.log(dataBank)
      

    })

  } catch (error) {
    alert(error.message)
  }
  return dataBank

};

export {
  addCompanyToDb,
  SignIn,
  GetDataFromdb
}




















