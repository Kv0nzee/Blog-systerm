import firebase from "firebase/app";
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyBmyok50g4KCeWopcWBYUTSpd4tfMyNwS4",
    authDomain: "blog-system-cc938.firebaseapp.com",
    projectId: "blog-system-cc938",
    storageBucket: "blog-system-cc938.appspot.com",
    messagingSenderId: "971403279648",
    appId: "1:971403279648:web:376ac2566c6353517e2b45",
    measurementId: "G-TK5VG7PPMK"
  };
  //init firebase
firebase.initializeApp(firebaseConfig)

// database setup
let db = firebase.firestore();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {db, timestamp}