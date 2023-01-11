// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa5SmhUBMAeBq2gmuD6NSfrJ641Y98x28",
  authDomain: "madproject-c69a9.firebaseapp.com",
  projectId: "madproject-c69a9",
  storageBucket: "madproject-c69a9.appspot.com",
  messagingSenderId: "169782043089",
  appId: "1:169782043089:web:eef63755a8d99af99d00f0",
  measurementId: "G-BCL29J21B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);