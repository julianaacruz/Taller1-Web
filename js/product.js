// Pedir id
const url = window.location.search;
const searchParams = new URLSearchParams(url);
const productId = searchParams.get("id");

console.log(productId);

// Buscamos en el arreglo de nuestros productos, el id que haga match con el param "id"
// de la barra de navegación
const product = products.find(product => product.id == productId);

// Obtenemos estos elementos del DOM para modificarlos con la info del producto
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productUniversity = document.getElementById("productUniversity");
const productDescription = document.getElementById("productDescription");
const productPrice = document.getElementById("productPrice");

// Modificamos la info del producto
productName.innerText = product.name;
productDescription.innerText = product.description;
productUniversity.innerText = product.university;
productPrice.innerText = `$${product.price}`;
productImage.setAttribute("src", product.image);
