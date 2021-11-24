// Import the functions you need from the SDKs you need
//mport { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var firebaseConfig = {
    apiKey: "AIzaSyBwiI2hx35-4r4ZKHui1UwzAHT6Iyj4WW8",
    authDomain: "watch-f7d6d.firebaseapp.com",
    projectId: "watch-f7d6d",
    storageBucket: "watch-f7d6d.appspot.com",
    messagingSenderId: "667384071305",
    appId: "1:667384071305:web:4ec8b0136830c561397258"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const formatCurrency = (price) => {
    return new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
    }).format(price);
};