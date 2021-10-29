const products = [
    {
        id: 1,
        name: "Data Science: Machine Learning",
        price: 820000,
        image: "https://dbibyhavas.io/es/wp-content/uploads/sites/5/2020/09/diferencias-machine-learning-big-data-y-data-science-1024x379.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/44022f13-20df-4666-9111-cede3e5dc5b6-2cc39992c67a.png",
        university: "HarvardX",
        level: "Intermedio",
        type: "Ciencia de datos",
        instructor: "Rafael Irrizarry"
    },
    {
        id: 2,
        name: "Excel avanzado: importación y análisis de datos",
        price: 590000,
        image: "https://microsofters.com/wp-content/uploads/2020/10/Las-novedades-de-Microsoft-Excel.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/54bc81cb-b736-4505-aa51-dd2b18c61d84-2082c7ba1024.png",
        university: "Berkeley XUniversity",
        level: "Avanzado",
        type: "Informática",
        instructor: "Steve Johnson"
    },
    {
        id: 3,
        name: "Inglés para todos",
        price: 120000,
        image: "https://www.britishcouncil.in/sites/default/files/learn_english_british_council.jpg",
        logo: "https://prod-discovery.edx-cdn.org/organization/logos/e0bfb887-eabd-4f4a-8583-7e5aa368b274-cb687d8acb0e.png",
        university: "Universidad del Rosario",
        level: "Básico",
        type: "Idiomas",
        instructor: "Margareth Harrison"
    },
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

    console.log(isAdded);
    let buttonHtml;
    if (isAdded) {
        buttonHtml = `<button class="btn btn--cart" disabled>Curso añadido</button>`
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

    });

};

//Pintar
products.forEach(product => {
    productTemplate(product);
}); 

