/*import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
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


import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

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
}*/


const auth = document.querySelector('.auth');
const authWith = auth.querySelector('.auth__with');
const authWithout = auth.querySelector('.auth__without');
const authProfileSpan = auth.querySelector('.auth__profile span');
const authSignout = auth.querySelector('.auth__signout');

var userInfo;

firebase.auth().onAuthStateChanged(function(user) {
    console.log(user);

    if(user) {
        // si el usuario existe quiere decir que inició sesión, se registró o ya tenía sesión iniciada
        authWith.classList.remove('hidden');
        authWithout.classList.add('hidden');
    
        const db = firebase.firestore();
        const usersRef = db.collection('users');
        usersRef.doc(user.uid).get().then(function (doc) {

          if(doc.exists) {
            const data = doc.data();
            userInfo = data;
            authProfileSpan.innerText = data.firstname;
            console.log(user.uid)
    
            if(data.admin) {
              const showAdmin = document.querySelectorAll('.showadmin');
              showAdmin.forEach(function(elem) {
                elem.classList.remove('hidden');
              });
            }

            var users ={
              id: user.uid,
              firstname : data.firstname,
              lastname : data.lastname,
              direction : data.direction,
              credit: data.credit,
              email : data.email
            }

            var jsonUser = JSON.stringify(users);

            window.localStorage.setItem("userId", jsonUser);
          }
        });
      } else {
        // si no existe quiere decir que no ha iniciado sesión o acaba de cerrar sesión
        authWith.classList.add('hidden');
        authWithout.classList.remove('hidden');

      }
     // window.localStorage.setItem('userId', user.uid);


  });

  // cerrar sesión
authSignout.addEventListener('click', function(event) {
    event.preventDefault();
    location.reload();
    window.localStorage.removeItem('userId');
    firebase.auth().signOut();

  });