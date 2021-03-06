const db = firebase.firestore();

const productsList = document.querySelector('.productsSection__cart');

var userData = JSON.parse(localStorage.getItem("userId"));

var userId = userData.id;
const productsRef = db.collection('users').doc(userId).collection('carrito')
let totalPrice = 0;
const total = document.querySelector(".sectionTotal__total");
let selectedItem = null;

// Create a root reference
var storageRef = firebase.storage().ref();

const btn = document.querySelector(".btn-checkout");

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
      <img class="product__img" src="${elem.img}" alt="">
      
      <div class="product__info ">
        <h3 class="product__title">${elem.title}</h3>
        <p class="product__price">Precio ${formatCurrency(elem.price)}</p>
        <button class="product__delete btn">Eliminar</button>
        </div>
        
      </div>
      `;

        if (elem.storageImg) {
            storageRef.child(elem.storageImg).getDownloadURL().then(function (url) {
                // Or inserted into an <img> element:
                var img = newProduct.querySelector('img');
                img.src = url;
            }).catch(function (error) {
                // Handle any errors
            });

        }



        //eliminar producto
        const deleteBtn = newProduct.querySelector('.product__delete');

        deleteBtn.addEventListener('click', function () {


            productsRef.doc(elem.id).delete().then(function () {
                getProducts();

            }).catch(function (error) {
                console.error("Error removing document: ", error);
            });
        })



        productsList.appendChild(newProduct);


        totalPrice += parseInt(elem.price);

        console.log(totalPrice)
        total.innerText = `Total $ ${formatCurrency(totalPrice)}`;

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
    });

}

getProducts();

var imagePath = '';


// 
btn.addEventListener('click', function () {
    location.href = 'checkout.html';
});


