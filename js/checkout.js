
const db = firebase.firestore();
const productsList = document.querySelector('.productsSection__cart');


var userData = JSON.parse(localStorage.getItem("userId"));

var userId = userData.id;

var productsRef = db.collection('users').doc(userId).collection('carrito');
let totalPrice = 0;
const name = document.querySelector('.name');
const loader = document.querySelector(".loader");
const total = document.querySelector(".sectionTotal__total");
const btn = document.querySelector(".btn-pay");
let confirmarPedido = false;
let pedido = [];
const direction = document.querySelector('.direction');
const credit = document.querySelector('.credit');



var pedidosUsers = db.collection('Pedidos');
// Create a root reference
var storageRef = firebase.storage().ref();
//agregar a lalista de pedidos y carrito
var userInfo = db.collection('users').doc(userId);



if (userId != null) {
    var carritoUser = db.collection('users').doc(userId).collection('carrito');
}
//leer los ususarios de firebase

function getUsers() {

    userInfo.get().then(function (doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            var user = doc.data();

            var temp = {

                firstname: user.firstname,
                lastname: user.lastname,
                direction: user.direction,
                credit: user.credit
            }

            direction.innerText = `Dirección de envío : ${user.direction}`;
            credit.innerText = `Tarjeta de crédito : ${user.credit}`;

            name.innerText = temp.firstname + " " + temp.lastname;


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function (error) {
        console.log("Error getting document:", error);
    });
}



getUsers();
console.log(userData.firstname)












// creación de nuevos productos a partir de la lista
function renderProducts(list) {
    productsList.innerHTML = '';
    list.forEach(function (elem) {
        const newProduct = document.createElement('div');
        newProduct.classList.add('product__check');
        const url = `producto.html?${elem.id}-${elem.title}`
        newProduct.setAttribute('href', url);

        newProduct.innerHTML = `

      
      

        <h3 class="checkout__product-name">${elem.title}</h3>
        <p class="checkout__product-price">${formatCurrency(elem.price)}</p>
        <hr size="1" width="50%" color="#C4C4C4"> 
        

      `;

        productsList.appendChild(newProduct);

        totalPrice += parseInt(elem.price);
        total.innerText = `Total: ${formatCurrency(totalPrice)}`;



        var compra = {
            id: userId,
            firstname: userData.firstname,
            lastname: userData.lastname,
            direction: userData.direction,
            credit: userData.credit,
            email: userData.email,
            title: elem.title,
            // img: form.image.value,
            price: elem.price,
            image: elem.img
        };

        pedido.push(compra)

    });

}

//leer los productos de firebase

function getProducts() {

    productsRef.get().then((querySnapshot) => {
        var objects = [];
        querySnapshot.forEach((doc) => {
            const obj = doc.data();
            obj.id = doc.id;
            objects.push(obj);
        });
        renderProducts(objects);
        // loader.classList.remove("loader--show")
    });

}




getProducts();

var imagePath = '';
// agregar pedido

btn.addEventListener('click', function () {
    //console.log('hola');
    console.log(confirmarPedido)
    confirmarPedido = true;

    pedido.forEach((doc) => {
        pedidosUsers.add(doc).then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);

            alert("Compra relizada con exito")
            location.href = 'courses.html';
        })
            .catch(function (error) {
                console.error("Error adding document: ", error);

            });
    });



})


btn.addEventListener('click', function () {
    //  location.href='perfil.html';
});