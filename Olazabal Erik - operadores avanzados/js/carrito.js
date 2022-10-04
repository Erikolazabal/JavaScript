//- Olazabal Erik - 

class Producto {
    constructor(id, nombre, precio, cantidad) {
        this.id = id; 
        this.nombre = nombre; 
        this.precio = precio; 
        this.cantidad = cantidad;
    }
}

const producto1 = new Producto("Robot1", "Robot-1", 30000, 1);
const producto2 = new Producto("Robot2", "Robot-2", 30000, 1);
const producto3 = new Producto("Robot3", "Robot-3", 25000, 1);
const producto4 = new Producto("Robot4", "Robot-4", 50000, 1);

const productos = [producto1, producto2, producto3, producto4];

const contenedorProductos = document.getElementById("contenedorProductos");

productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("col-sm-8", "col-md-6", "col-lg-4", "p-4");
    divProducto.innerHTML = `
                            <figure>
                            <img src="../img/Productos/${producto.id}.webp" alt="robot1" class="w-100 img-thumbnail">
                                <div class="card text-center mt-2">
                                    <div class="card-header">${producto.nombre}</div>
                                    <div class="card-body p-1 ">
                                    <span class="mx-2">$${producto.precio}</span>
                                    <button id="boton${producto.id}" class="btn bg-success text-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Agregar al Carrito</button>
                                    </div>   
                                </div>
                            </figure>`;
    contenedorProductos.appendChild(divProducto);
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener("click", () => {
        /* ---- array del LocalStorage: ---- */
        localStorage.setItem("productos", JSON.stringify(productos));
        verProductos = localStorage.getItem("productos") ? JSON.parse(localStorage.getItem("productos")) : []; 
    console.log(verProductos)
        agregarAlCarrito(producto.id);
    })
});



const carrito = [];

if(localStorage.getItem("carrito")) {
    let reserva = JSON.parse(localStorage.getItem("carrito"));
    /* reservas.push(...reserva); */
    for(let i = 0; i < reserva.length; i++ ) {
        productos.push(reserva[i]);
    
    }
}

// chequea unidades 

const agregarAlCarrito = (id) => {
    const producto = productos.find(producto => producto.id === id);
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    }else {
        carrito.push(producto);
    }
    actualizarCarrito();
}

//div de carrito de compras 

const contenedorCarrito = document.getElementById("contenedorCarrito");

function actualizarCarrito() {
    let aux="";
    carrito.forEach(producto => {
        aux += `
                <figure class="d-flex">
                <img src="../img/Productos/${producto.id}.webp" alt="robot1" class="img-thumbnail ancho-25">
                    <div class="card text-center">
                        <div class="card-header">${producto.nombre}</div>
                        <div class="card-body p-1 d-flex align-items-center">
                        <span class="mx-2">$${producto.precio}</span>
                        <button onClick = "eliminarDelCarrito()" class="btn bg-success p-2 text-white"> Eliminar del Carrito </button>
                        </div>   
                    </div>
                </figure>
                `
    })

    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}

//Función elimine el producto del carrito:  ( no anda de momento )

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    actualizarCarrito();
}

/* ----- OPERADOR LÓGICO && AND:  ------- */
const avercarrito = document.getElementById("averCarrito");
avercarrito.addEventListener("click", () => {
    carrito.length === 0 && console.log("El carrito está vacío");
});

///Función vaciar 

const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

//Función total 

const totalCompra = document.getElementById("totalCompra");

const calcularTotalCompra = () => {
    let total = 0; 
    carrito.forEach( producto => {
        total += producto.precio * producto.cantidad;
    });
    totalCompra.innerHTML = total;
}

/*------------ operadores avanzados --------------*/
 /* ---- Se agrego un array del LocalStorage: en la fila 38  ---- */
 /* ---- Se agrego un OPERADOR LÓGICO && AND:  en la fila 105  ---- */
 /* ---- Se agrego un OPERADOR OR:  en la pagina inscripciones -- fila 70  ---- */

producto1.cantidad >=1 ? console.log(producto1.nombre + " tiene stock") : console.log(producto1.nombre + " no tiene stock suficiente");
producto2.cantidad >=2 ? console.log(producto2.nombre + " tiene stock") : console.log(producto2.nombre + " no tiene stock suficiente");
producto3.cantidad >=1 ? console.log(producto3.nombre + " tiene stock") : console.log(producto3.nombre + " no tiene stock suficiente");
producto4.cantidad >=2 ? console.log(producto4.nombre + " tiene stock") : console.log(producto4.nombre + " no tiene stock suficiente");

console.log("DESESTRUCTURACIÓN DE ARRAY")

let [primero, , tercero, cuarto] = productos;

console.log(cuarto); 
console.log(primero);


console.log (productos[0], productos[1], productos[2], productos[3]);

const producto = {
    nombre: "robot5",
    precio: 50000,
    cantidad: 1,
}

console.log(producto);