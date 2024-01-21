import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCirmoB3WjimzZYrqVxzF1Ri88mGekmdLo",
  authDomain: "react-netflix-clone-3e98e.firebaseapp.com",
  projectId: "react-netflix-clone-3e98e",
  storageBucket: "react-netflix-clone-3e98e.appspot.com",
  messagingSenderId: "421024238573",
  appId: "1:421024238573:web:a533a9eb5d72f77f9835e4",
  measurementId: "G-73XBY2Z1ZW"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);