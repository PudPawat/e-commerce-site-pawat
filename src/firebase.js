import firebase from "firebase/compat/app"
import "firebase/compat/auth"



// Additional authentication setup code using Firebase and FirebaseUI


const app = firebase.initializeApp({
  apiKey: "AIzaSyCxkkx3GsBE0bygj_Pz7mBgl4Njuh9DQMw",
  authDomain: "pawatmock.firebaseapp.com",
  projectId: "pawatmock",
  storageBucket: "pawatmock.appspot.com",
  messagingSenderId: "1015014712224",
  appId: "1:1015014712224:web:15b8189f9d33425d983ac5",
  measurementId: "G-49Y4WB90EG"
})


// const analytics = getAnalytics(app);
export const auth = app.auth()
export default app
