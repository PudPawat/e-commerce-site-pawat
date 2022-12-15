// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import { connectAuthEmulator } from "firebase/auth";
import { async } from "@firebase/util";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxkkx3GsBE0bygj_Pz7mBgl4Njuh9DQMw",
  authDomain: "pawatmock.firebaseapp.com",
  projectId: "pawatmock",
  storageBucket: "pawatmock.appspot.com",
  messagingSenderId: "1015014712224",
  appId: "1:1015014712224:web:15b8189f9d33425d983ac5",
  measurementId: "G-49Y4WB90EG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
connectAuthEmulator(auth,"http://localhost:3002");

// const loginEmailPassword = async() =>{
//     const loginEmail = txtEmail.value;

//     const loginPassword = txtPassword.value;

//     const userCredential = await signInWihEmailAndPassword(auth, loginEmail, loginPassword);

//     console.loh(userCredential.user)
// }


// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }

export default app