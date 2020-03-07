import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "my-contribution-fa178.firebaseapp.com",
  databaseURL: "https://my-contribution-fa178.firebaseio.com",
  projectId: "my-contribution-fa178",
  storageBucket: "my-contribution-fa178.appspot.com",
  messagingSenderId: "394502965932",
  appId: "1:394502965932:web:ffe012a24d3f9f3a8f2d09",
  measurementId: "G-549XSR6D0K"
};

firebase.initializeApp(firebaseConfig);

export default firebase