/*
// Pedir id
const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

console.log(productId);


const product = products.find(product => product.id == productId);

const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productUniversity = document.getElementById("productUniversity");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");


productName.innerText = product.name;
productDescription.innerText = product.description;
productUniversity.innerText = product.university;
productPrice.innerText = `$${product.price}`;
productImage.setAttribute("src", product.image);


*/

///leer producto de firebase

window.addEventListener('load', function () {

    console.log(location.search);

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get("id");

    console.log(productId);

    var newProduct = {

    };
    
    // referencia a la base de datos
    const db = firebase.firestore();
    
    // referencia a la coleción productos
    const productosRef = db.collection('products');



    var userData = JSON.parse(localStorage.getItem("userId"));

    if(userData!=null){
      var userId = userData.id;

    }

    

    console.log(userId)

    if(userId!=null){

      var carritoUser = db.collection('users').doc(userId).collection('carrito');
    }

  //  var storageRef = firebase.storage().ref();
  
    //referencia al producto con el uid específico
    productosRef.doc(productId)
    .get() // traer info de ese producto
    .then(function (snapshot) {
  
      const product = snapshot.data();
  
      const productName = document.getElementById("productName");
      productName.innerText = product.name;
/*
      storageRef.child(product.storageImg).getDownloadURL().then(function(url) {
        // Or inserted into an <img> element:
        document.querySelector('.details__img').setAttribute('src', url);
      }).catch(function(error) {
        // Handle any errors
      });
*/
      document.getElementById("productPrice").innerText = product.price;
      document.getElementById("productUniversity").innerText = product.university;
      document.getElementById("productDescription").innerText = product.description;
      document.getElementById("productImage").setAttribute("src", product.image);


       newProduct = {
        title: product.name,
        img: product.image,
        price: product.price,
        //details :product.details,
        //storageImg: product.storageImg
      };
  
     /* titlep = product.title;
       pricep= product.list;
*/
    })
  
    console.log("");

    const btn = document.querySelector('.product__addToCart');

    productosRef.doc(productId)
      .get() // traer info de ese producto
      .then(function (snapshot) {
    
        const product = snapshot.data();

        //console.log(newProduct)


    /*
        const title = document.querySelector('h1');
        title.innerText = product.title;
  
        storageRef.child(product.storageImg).getDownloadURL().then(function(url) {
          // Or inserted into an <img> element:
          document.querySelector('img').setAttribute('src', url);
          */

        }).catch(function(error) {
          // Handle any errors
        });

    btn.addEventListener('click',function(){
      if(userId==null){
        alert("Debes registrarte e ingresar para poder agregar productos al carrito")
      }  
      carritoUser.add(newProduct).then(function(docRef) {
          alert("Producto agregado al carrito")
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);

      });
    }) 
  });



