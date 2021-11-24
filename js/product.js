

window.addEventListener('load', function () {

    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get("id");

    var newProduct = {

    };

    // referencia a la base de datos
    const db = firebase.firestore();

    // referencia a la coleción productos
    const productosRef = db.collection('products');



    var userData = JSON.parse(localStorage.getItem("userId"));

    if (userData != null) {
        var userId = userData.id;

    }



    if (userId != null) {

        var carritoUser = db.collection('users').doc(userId).collection('carrito');
    }


    //referencia al producto con el uid específico
    productosRef.doc(productId)
        .get() // traer info de ese producto
        .then(function (snapshot) {

            const product = snapshot.data();

            const productName = document.getElementById("productName");
            productName.innerText = product.name;

            document.getElementById("productPrice").innerText = formatCurrency(product.price);
            document.getElementById("productUniversity").innerText = product.university;
            document.getElementById("productDescription").innerText = product.description;
            document.getElementById("productImage").setAttribute("src", product.image);
            document.getElementById("productUnilogo").setAttribute("src", product.logo);
            document.getElementById("instructorImg").setAttribute("src", product.profileimg);
            document.getElementById("instructorName").innerText = product.instructor;
            document.getElementById("instructorDescription").innerText = product.instructordescription;
            document.getElementById("about").innerText = product.about;




            newProduct = {
                title: product.name,
                img: product.image,
                price: product.price,
                university: product.university,

            };

        })

    const btn = document.querySelector('.product__addToCart');

    productosRef.doc(productId)
        .get() // traer info de ese producto
        .then(function (snapshot) {

            const product = snapshot.data();

            
        }).catch(function (error) {
            // Handle any errors
        });

    btn.addEventListener('click', function () {
        if (userId == null) {
            alert("Debes registrarte e ingresar para poder agregar productos al carrito")
        }
        carritoUser.add(newProduct).then(function (docRef) {
            //alert("Producto agregado al carrito")
            console.log("Document written with ID: ", docRef.id);
            // Deshabilitar botón carrito
            btn.setAttribute("disabled", true);
            btn.innerText = "Añadido al carrito";

        })
            .catch(function (error) {
                console.error("Error adding document: ", error);

            });
    })
});



