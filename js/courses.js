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
    }
];

let cart = [];

const productsSection = document.getElementById("products");

//Agregar productos
const productTemplate = (item) => {
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


const filterByCategorySelect = document.getElementById("categories");
const orderBySelect = document.getElementById("orderBy");

const loadProducts = () => {
    
    const category = filterByCategorySelect.value || "";
    const order = orderBySelect.value || "";

    productsSection.innerHTML = "";

    let filteredProductsByCategory; //Cursos Filtrados

    if (category !== "") {
        filteredProductsByCategory = products.filter((product) => product.type === category);
    } else {
        filteredProductsByCategory = products;
    }

    if (order === "asc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => a.price - b.price);
    }

    if (order === "desc") {
        filteredProductsByCategory = filteredProductsByCategory.sort((a, b) => b.price - a.price);
    }
    
    //pintar
    filteredProductsByCategory.forEach(product => {
        productTemplate(product);
    });
}


filterByCategorySelect.addEventListener("change", e => {
    loadProducts();
});

orderBySelect.addEventListener("change", e => {
    loadProducts();
});


//Pintar
products.forEach(product => {
    productTemplate(product);
}); 

