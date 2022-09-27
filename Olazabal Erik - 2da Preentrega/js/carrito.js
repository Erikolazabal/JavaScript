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
        agregarAlCarrito(producto.id);
    })
});

const carrito = [];

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
                        <button onClick = "eliminarDelCarrito(${producto.id})" class="btn bg-success p-2 text-white"> Eliminar del Carrito </button>
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