const products = [
    {
        id: 1,
        name: "Data Science: Machine Learning",
        price: 820000,
        description: "Cree un sistema de recomendación de películas y aprenda la ciencia detrás de una de las técnicas de ciencia de datos más populares y exitosas.",
        image: "https://dbibyhavas.io/es/wp-content/uploads/sites/5/2020/09/diferencias-machine-learning-big-data-y-data-science-1024x379.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png",
        university: "HarvardX",
        level: "Intermedio",
        type: "data science",
        about: "Quizás las metodologías de ciencia de datos más populares provienen del aprendizaje automático. Lo que distingue al aprendizaje automático de otros procesos de decisión guiados por computadora es que crea algoritmos de predicción utilizando datos. Algunos de los productos más populares que utilizan el aprendizaje automático incluyen los lectores de escritura a mano implementados por el servicio postal, el reconocimiento de voz, los sistemas de recomendación de películas y los detectores de spam. En este curso, parte de nuestro Programa de certificación profesional en ciencia de datos, aprenderá algoritmos populares de aprendizaje automático, análisis de componentes principales y regularización mediante la creación de un sistema de recomendación de películas.",
        instructor: "Rafael Irrizarry",
        comments: [
            {
                name:"",
                comment:"",
                image:""
            }
        ]
    },
    {
        id: 2,
        name: "Excel avanzado: importación y análisis de datos",
        price: 590000,
        image: "https://microsofters.com/wp-content/uploads/2020/10/Las-novedades-de-Microsoft-Excel.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/54bc81cb-b736-4505-aa51-dd2b18c61d84-2082c7ba1024.png",
        university: "Berkeley XUniversity",
        level: "Avanzado",
        type: "computers",
        about: "Lorem ipsum dolor sit amet consectetur adipiscing elit eget cubilia ante et, venenatis in accumsan nullam morbi hendrerit taciti porttitor natoque porta varius magnis, metus montes nibh auctor nulla dapibus turpis rhoncus fames vulputate.",
        instructor: "Steve Johnson"
    },
    {
        id: 3,
        name: "Inglés para todos: Nivel básico",
        price: 120000,
        image: "https://www.britishcouncil.in/sites/default/files/learn_english_british_council.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/e0bfb887-eabd-4f4a-8583-7e5aa368b274-cb687d8acb0e.png",
        university: "Universidad del Rosario",
        level: "Básico",
        type: "languages",
        about: "Lorem ipsum dolor sit amet consectetur adipiscing elit eget cubilia ante et, venenatis in accumsan nullam morbi hendrerit taciti porttitor natoque porta varius magnis, metus montes nibh auctor nulla dapibus turpis rhoncus fames vulputate.",
        instructor: "Margareth Harrison"
    },
    {
        id: 4,
        name: "Francés Intermedio",
        price: 180000,
        image: "https://esquire-sg.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/01/22121302/Steer-deflecting-Conversation-main-image.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/188a8d01-87c1-45e6-b518-3de65906deac-af51133a34ab.png",
        university: "Sorbonne Université",
        level: "Intermedio",
        type: "languages",
        about: "Lorem ipsum dolor sit amet consectetur adipiscing elit eget cubilia ante et, venenatis in accumsan nullam morbi hendrerit taciti porttitor natoque porta varius magnis, metus montes nibh auctor nulla dapibus turpis rhoncus fames vulputate.",
        instructor: "Carla Gagnon"
    },
    {
        id: 5,
        name: "Conceptos básicos de Python para la ciencia de datos",
        price: 990000,
        description: "Este curso de Python proporciona una introducción para principiantes a Python para la ciencia de datos. Practique a través de ejercicios de laboratorio y estará listo para crear sus primeros scripts de Python por su cuenta.",
        image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/87b07564-d569-4cfd-bee6-8b0a407acb73-dc33e4b5f353.png",
        university: "IBM",
        level: "Básico",
        type: "data science",
        about: "Tenga en cuenta: Los estudiantes que completen con éxito este curso de IBM pueden obtener una insignia de habilidad, una credencial detallada, verificable y digital que describe los conocimientos y habilidades que ha adquirido en este curso. ¡Inscríbase para obtener más información, complete el curso y reclame su insignia! Empiece a aprender Python para la ciencia de datos, así como a la programación en general, con este curso de introducción a Python. Este curso de Python para principiantes lo llevará rápidamente de cero a la programación en Python en cuestión de horas y le dará una idea de cómo comenzar a trabajar con datos en Python. Una vez completado, podrá escribir sus propios scripts de Python y realizar análisis de datos prácticos básicos utilizando nuestro entorno de laboratorio basado en Jupyter. Si quieres aprender Python desde cero, este curso es para ti.",
        instructor: "Joseph Santarcangelo"

    },

 {
        id: 6,
        name: "Introducción al Office 365",
        price: 190000,
    description: "Aprende el funcionamiento básico de los componentes principales de Office 365 y optimiza tu tiempo utilizando el más adecuado para tus necesidades en cada momento.",
        image: "https://images.pexels.com/photos/374831/pexels-photo-374831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/518a47f2-66fb-4529-8902-a4f7ca3002ef-78d294b01e63.png",
        university: "UPValenciaX",
        level: "Básico",
        type: "computers",
        about: "Office 365 constituye una suite ofimática de extraordinaria potencia, compuesta por múltiples herramientas que funcionan de manera coordinada, y que permiten al usuario realizar tareas de todo tipo de una manera sencilla. Conocer el funcionamiento básico de los componentes principales de Office 365 es de gran importancia para poder utilizar las utilidades más adecuadas a la necesidad que se presente en cada momento. Este curso pretende dar un vistazo a los conceptos fundamentales de la suite, mostrando de manera práctica el funcionamiento de las principales herramientas, dotando así al usuario de los conceptos básicos para un correcto uso de las funcionalidades más importantes",
        instructor: "Jaime Busquets"


    },

 {
        id: 7,
        name: "Griego clásico a través de las Guerras Médicas",
        price: 350000,
description: "Mejora tus conocimientos de griego clásico en el marco de las guerras entre griegos y persas.",
        image: "https://images.pexels.com/photos/951531/pexels-photo-951531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        logo:"https://prod-discovery.edx-cdn.org/organization/logos/daf114d3-0909-4991-8dc0-10c319ee8687-cfb543208a6c.png",
        university: "UAMx",
        level: "Intermedio",
        type: "languages",
        about: "El propósito de este curso en línea es la ampliación y consolidación de conocimientos para poder leer y traducir textos de dificultad media en griego clásico. El hilo conductor de este MOOC son las Guerras Médicas, que enfrentaron en el siglo V a. C. a las ciudades estado griegas y a los persas. Así, a través de una serie de textos que tratan sobre este conflicto, los estudiantes irán progresando en sus conocimientos de Morfología, Sintaxis y Léxico. Todo ello se completa con detalladas explicaciones sobre el contexto histórico de la contienda.Comenzaremos este curso con una introducción a las Guerras Médicas, que marcaron el curso posterior de la historia de Europa. Después veremos las cuatro batallas cruciales en el desarrollo de este conflicto bélico: Maratón, Termópilas, Salamina y Platea.",
        instructor: "Emilio Crespo Güemes"


    },


{
        id: 8,
        name: "Redes de computadores",
        price: 440000,
description: "Aprende los fundamentos de las redes de computadores, incluyendo su arquitectura, protocolos y los aspectos a considerar para hacerlas seguras.",
        image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        llogo:"https://prod-discovery.edx-cdn.org/organization/logos/e0bfb887-eabd-4f4a-8583-7e5aa368b274-cb687d8acb0e.png",
        university: "Universidad del Rosario",
        level: "Intermedio",
        type: "computers",
        about: "Las redes de computadores, o renombradas hoy en día como Networks of Things , son esenciales para soportar los servicios de Internet que usamos a diario, dado que soportan la transformación digital de las empresas y apalancan de manera directa la revolución 4.0 que vivimos hoy en día. Entender el funcionamiento de las redes de computadores es fundamental para poder iniciarse en roles orientados al diseño, implementación y mantenimiento de redes corporativas, y sin duda también representa un conocimiento diferencial para poder optar por uno de los denominados empleos de la cuarta revolución industrial que incluyen: Especialistas en Big Data, Especialistas en transformación digital, Desarrolladores y analistas de software y aplicaciones, gestor de servicios de TI, entre otros. Este curso te enseñará los conceptos claves y herramientas que te ayudarán a entender mejor la forma como funcionan las redes de computadores, realizando un entendimiento de la arquitectura más utilizada en internet (TCP/IP) y haciendo una revisión de los protocolos más importantes de cada una de las capas de dicha arquitectura.",
        instructor: "Daniel Diaz",

    },

];

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

    let buttonHtml;
    if (isAdded) {
        buttonHtml = `<button class="btn btn--cart" disabled>Añadido al carrito</button>`
    } else {
        buttonHtml = `<button class="btn btn--cart">Añadir al carrito</button>`;
    }

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
                <p class="product__price">${item.price}</p>
                </a>
                <button class="product__delete hidden showadmin">Eliminar</button>
                <button class="product__edit hidden showadmin">Editar</button>
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