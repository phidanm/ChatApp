import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDB41J6EXQ5ZxYmOy-62H5keGDIN2D41Kg",
  authDomain: "chat-app-ef3bc.firebaseapp.com",
  projectId: "chat-app-ef3bc",
  storageBucket: "chat-app-ef3bc.appspot.com",
  messagingSenderId: "275843040743",
  appId: "1:275843040743:web:0eaf139cd98d2afa77e942"
})
export const db = app.firestore();
export default app;
export const auth = app.auth();
