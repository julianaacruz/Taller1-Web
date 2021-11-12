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
