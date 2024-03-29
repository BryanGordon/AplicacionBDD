import firebase from "firebase";
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBeIgCW9EE5-TYBMqoVqFgM55DzLRNr4pM",
  authDomain: "react-practica1.firebaseapp.com",
  projectId: "react-practica1",
  storageBucket: "react-practica1.appspot.com",
  messagingSenderId: "527073604761",
  appId: "1:527073604761:web:cfc7929991e02fc220f408",
  measurementId: "G-W6L73LRS4R"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const auth=fire.auth()

export {auth}