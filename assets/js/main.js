function producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function carrito () {
    this.productos = [];
    
    this.agregarProducto = function () {
        this.productos.push(producto);

    }
        
    
}

console.log(productos)


