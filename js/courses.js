let cart = [];
let selectedItem = null;

//firebase
const db = firebase.firestore();
const productsRef = db.collection("products"); 
const admin =document.querySelector('.auth__profile')

  //leer productos de firebase
  let objectsList =[]
  function getProducts(){

    productsRef.get().then((querySnapshot) => {
       objectsList = [];
      querySnapshot.forEach((doc) => {
          const obj = doc.data();
          obj.id= doc.id;
          objectsList.push(obj);
          console.log(`${doc.id} => ${doc.data()}`);
      });
      productTemplate(objectsList);
     //loader.classList.remove("loader--show")
console.log(objectsList)
  });

  }

  getProducts();

const productsSection = document.getElementById("products");




//add-----------------------------


function productTemplate (list) {
    productsSection.innerHTML = '';

    list.forEach(function (item) {

    const product = document.createElement("div");
    product.className = "product";
    product.setAttribute("href", `./product.html?id=${item.id}`);

    // Carrito
    const isAdded = cart.some(productCart => productCart.id === item.id);

    console.log(isAdded); //No esta funcionando el some? ****************



    // Añadir el HTML a product
    product.innerHTML = `
    <a href="./product.html?id=${item.id}" style="text-decoration: none;">
    <img src="${item.image}" alt="${item.name}" class="product__image">
            <figure class="product__logo">
                <img src="${item.logo}">
            </figure>
            
            <div class="product__description">
                <p class="product__name">${item.name}</p>
                <p class="product__university">${item.university}</p>
                <p class="product__price">${formatCurrency(item.price)}</p>
                </a>
                
            </div>

            <div class="admin__buttons">
            <button class="product__delete btn btn--red hidden showadmin">Eliminar</button>
            <button class="product__edit btn hidden showadmin">Editar</button>
            </div>
          
    `;

    productsSection.appendChild(product);


    const productCartButton = product.querySelector(".btn--cart");
/*
    // Click botón del carrito:
    productCartButton.addEventListener("click", e => {
        e.preventDefault();

        const productAdded = {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price
        };

        cart.push(productAdded);

        // Deshabilitar botón carrito
        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText="Añadido al carrito";

    });
    */


    //eliminar producto
    const deleteBtn = product.querySelector('.product__delete');

    deleteBtn.addEventListener('click',function(){


      productsRef.doc(item.id).delete().then(function() {
          getProducts();

          console.log("Document successfully deleted!");
      }).catch(function(error) {
          console.error("Error removing document: ", error);
      });
      })
    

      productsSection.appendChild(product);

    const editBtn = product.querySelector('.product__edit');
    editBtn.addEventListener('click',function(){
      form.name.value=item.name;
      //form.image.value=elem.img;
      form.price.value=item.price;
      selectedItem =item;
    });
   
    if(userInfo && userInfo.admin) {
      deleteBtn.classList.remove('hidden');
      editBtn.classList.remove('hidden');


    admin.setAttribute('href', "index.html");

    }





});
};












//Agregar productos


/*

const productsTemplate = (item) => {
    const product = document.createElement("a");
    product.className = "product";
    product.setAttribute("href", `./product.html?id=${item.id}`);

    // Carrito
    const isAdded = cart.some(productCart => productCart.id === item.id);

    console.log(isAdded); //No esta funcionando el some? ****************

    let buttonHtml;
    if (isAdded) {
        buttonHtml = `<button class="btn btn--cart" disabled>Añadido al carrito</button>`
    } else {
        buttonHtml = `<button class="btn btn--cart">Añadir al carrito</button>`;
    }

    // Añadir el HTML a product
    product.innerHTML = `
    <img src="${item.image}" alt="${item.name}" class="product__image">
            <figure class="product__logo">
                <img src="${item.logo}">
            </figure>
            
            <div class="product__description">
                <p class="product__name">${item.name}</p>
                <p class="product__university">${item.university}</p>
                <p class="product__price">${item.price}</p>
                ${buttonHtml}
            </div>
    `;

    productsSection.appendChild(product);


    const productCartButton = product.querySelector(".btn--cart");

    // Click botón del carrito:
    productCartButton.addEventListener("click", e => {
        e.preventDefault();

        const productAdded = {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price
        };

        cart.push(productAdded);

        // Deshabilitar botón carrito
        productCartButton.setAttribute("disabled", true);
        productCartButton.innerText="Añadido al carrito";

    });

};


*/



// agregar nuevo producto
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {
  event.preventDefault();

//para probar la subida de la imagen  
  const newProduct = {
    name: form.name.value,
    price: form.price.value,
    description: form.description.value,
    image: form.image.value,
    logo: form.logo.value,
   university: form.university.value,
   level: form.level.value,
   type: form.type.value,
   about: form.About.value,
   instructor: form.instructor.value, 
  };

//  loader.classList.add("loader--show");
  function handleThen(docRef) {
      
    getProducts();
    form.name.value = '';
    form.price.value = '';  
    form.description.value = '';
    form.image.value = '';
    form.logo.value = '';
    form.university.value = '';
    form.level.value = '';
    form.type.value = '';
    form.About.value = '';
    form.instructor.value = '';
   // form.color.value = '';
    selectedItem =null;


    location.reload()
}



function handleCatch  (error) {
  console.error("Error adding document: ", error);
}

// si existe, es decir que va a editar
  if(selectedItem){
    productsRef.doc(selectedItem.id).set(newProduct).
    then(handleThen)
  .catch(handleCatch);

  }
  else{
    
  //si no existe es porque es un nuevo producto


  productsRef.add(newProduct)   
.then(handleThen)
.catch(handleCatch);

}
});






const filterByCategorySelect = document.getElementById("categories");
const orderBySelect = document.getElementById("orderBy");

const loadProducts = () => {
    
    const category = filterByCategorySelect.value || "";
    const order = orderBySelect.value || "";

    productsSection.innerHTML = "";

    let filteredProductsByCategory; //Cursos Filtrados

    if (category !== "") {
        filteredProductsByCategory = objectsList.filter((product) => product.type === category);
    } else {
        filteredProductsByCategory = objectsList;
    }

    if (order === "asc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => a.price - b.price);
    }

    if (order === "desc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => b.price - a.price);
    }
    
    //pintar
    productTemplate(filteredProductsByCategory);
    /*
    filteredProductsByCategory.forEach(product => {
        productTemplate(product);
    });
    */
}


filterByCategorySelect.addEventListener("change", e => {
    loadProducts();
});

orderBySelect.addEventListener("change", e => {
    loadProducts();
});

console.log(objectsList)


//Pintar
/*
objectsList.forEach(product => {
    productTemplate(product);
    console.log("1 producto")
}); 

*/