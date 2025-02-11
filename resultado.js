"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var funcion_1 = require("./funcion"); // Importo la clase funcion
// Creo la instancia 
var producto = new funcion_1.funcion("Cuaderno", 50, 30);
var producto2 = new funcion_1.funcion("Lapiz", 10, 12);
var producto3 = new funcion_1.funcion("Tijeras", 10, 3);
// Aumentar la cantidad
producto.aumentar(10);
producto2.aumentar(5);
producto3.aumentar(10);
// Reducir la cantidad
producto.reducir(4);
producto2.reducir(2);
producto3.reducir(4);
