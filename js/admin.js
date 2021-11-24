const db = firebase.firestore();

const productsList = document.querySelector('.productsSection__cart');

var userData = JSON.parse(localStorage.getItem("userId"));

var userId = userData.id;
const productsRef = db.collection('Pedidos')
let totalPrice = 0;

let selectedItem = null;

// Create a root reference
var storageRef = firebase.storage().ref();

// creación de nuevos productos a partir de la lista
function renderProducts(list) {
    productsList.innerHTML = '';
    list.forEach(function (elem) {
        const newProduct = document.createElement('div');
        newProduct.classList.add('product');
        const url = `producto.html?${elem.id}-${elem.title}`
        newProduct.setAttribute('href', url);


        newProduct.innerHTML = `
      <div class="product__cart ">      
      <div class="product__info ">
        <h3 class="product__title">${elem.title}</h3>
        <p class="product__price">Precio $ ${elem.price}</p>
        <p class=""> ${elem.firstname}</p>
        <p class=""> ${elem.lastname}</p>
        <p class="">Dirección ${elem.direction}</p>
        <p class="">Tarjeta de crédito ${elem.credit}</p>
        <p class="">Email ${elem.email}</p>
          <p class="product__price">$ ${elem.price}</p>
        </div>
        
      </div>
      `;




        productsList.appendChild(newProduct);



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