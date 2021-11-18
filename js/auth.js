import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyByhA1brk5VAEhGUYStJT7zKtnG6yqqCHw",
    authDomain: "edxcart-ddcd3.firebaseapp.com",
    projectId: "edxcart-ddcd3",
    storageBucket: "edxcart-ddcd3.appspot.com",
    messagingSenderId: "351277760652",
    appId: "1:351277760652:web:2d8a368c022b1c6dc87ba9"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const registerForm = document.getElementById("register");

registerForm.addEventListener("submit", e=> {
    e.preventDefault;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    console.log("registered");

    if(email && password){
        createUser(email,password);
    }else{
        console.log("Completa todos los campos")
    }
})


const createUser = async (email,password) =>{
    try{
        await createUserWithEmailAndPassword(auth,email,password);
    } catch (e){
        if (e.code === "auth/email-already-in-use") {
            console.log("Correo electrónico en uso...")
        }
        if (e.code === "auth/weak-password") {
            console.log("Intenta con una contraseña más segura...")
        }
    }
}