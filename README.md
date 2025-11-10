# Proyecto Carrito de Compras – Módulo JavaScript

## Descripción

Este proyecto implementa un **simulador de carrito de compras** utilizando **JavaScript puro (sin frameworks ni librerías externas)**.  
Permite al usuario seleccionar productos, agregar cantidades, visualizar el detalle de la compra y obtener el total final mediante alertas y prompts del navegador.

El objetivo del proyecto es reforzar los fundamentos de la **programación orientada a objetos (POO)** y la **manipulación de datos en memoria**, aplicando conceptos como objetos, métodos y estructuras de control.

Además, forma parte del módulo de consolidación del curso bajo el nombre de `M03Consolidacion`, lo que sugiere que este ejercicio integra y refuerza varios temas vistos previamente en el curso (manipulación de objetos, arrays, interacción con el usuario, validaciones).

---

## Características principales

- Definición de una clase `Producto` para representar artículos con `id`, `nombre` y `precio`.  
- Implementación de una clase `Carrito` que gestiona los productos seleccionados.  
- Flujo interactivo con el usuario mediante ventanas de **alerta** y **prompt**.  
- Cálculo automático del **total de la compra** según los productos agregados.  
- Validación de entradas (verifica que la cantidad y el número de producto sean válidos).  
- Limpieza del carrito tras finalizar la compra.  
- Parte de un repositorio de consolidación del módulo 03, que implica integrar conocimientos previos.

---

## Tecnologías utilizadas

- **JavaScript (ES5/ES6)**  
- **Alert() y prompt()** para interacción con el usuario  
- **Programación orientada a objetos**  

---


---

## Funcionamiento

1. Al ejecutar la función `Comprar()`, se muestra una lista de productos disponibles.  
2. El usuario ingresa el número del producto y la cantidad que desea comprar.  
3. El sistema valida la entrada, agrega el producto al carrito y muestra el detalle de la compra.  
4. Se consulta al usuario si desea seguir agregando productos.  
5. Si el usuario decide finalizar, el programa calcula el total final y muestra un mensaje de éxito.

---

## Ejemplo de código

```javascript
function Producto(id, nombre, precio) {
    this.id = Number(id);
    this.nombre = nombre;
    this.precio = Number(precio);
}

function Carrito() {
    this.productos = [];

    this.agregarProducto = function (producto, cantidad) {
        this.productos.push({ producto, cantidad });
    };

    this.calcularTotal = function() {
        var total = 0;
        for (var index = 0; index < this.productos.length; index++) {
            var element = this.productos[index];
            total += element.producto.precio * element.cantidad;
        }
        return total;
    };
}

```

## Créditos

Desarrollado por Álvaro Ortega Hamel como parte del proceso de aprendizaje en JavaScript, centrado en la programación orientada a objetos y la interacción básica con el usuario (arrays, objetos, métodos).
