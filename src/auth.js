import {initalizeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDcmuq9j4KKXtBjKqFONJfU7PdNrUDEDVM",
    authDomain: "kitchen-compiler.firebaseapp.com",
    projectId: "kitchen-compiler",
    storageBucket: "kitchen-compiler.appspot.com",
    messagingSenderId: "748622514309",
    appId: "1:748622514309:web:4dd1a08bbad1986d3a01ec",
    measurementId: "G-1MDX6LJWDN"
  
  };
  

const app = initalizeApp(firebaseConfig);
const autbh = getAuth();

createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // signed in
  const user = userCredential.user;
}).catch ((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
})

signInWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
  // signed in
  const user = userCredential.user;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
})
