const db = firebase.firestore();
const usersRef = db.collection('users');

const register = document.querySelector('.register__form');


register.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const email = register.email.value;
    const password = register.password.value;
    
    const firstname = register.firstname.value;
    const lastname = register.lastname.value;
    const direction = register.direction.value;
    const credit = register.credit.value;




 firebase.auth().createUserWithEmailAndPassword(email, password)
 
 
 .then(function (credentials) {

    const uid = credentials.user.uid;

    usersRef.doc(uid).set({
      firstname: firstname,
      lastname: lastname,
      direction: direction,
      credit: credit,
      email: email,
    })
    .then(function () {
        alert("Registrado exitosamente")
       window.location.href = 'courses.html';
      });
})
 
 
 .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;


alert("información invalida, intente de nuevo");
      // register.querySelector('.form__error').classList.remove('hidden');
        // ...
      });
    });
  
  