
import { funcion } from './funcion'; // importamos la clase

// Aqui creo una instancia para agregar los utiles
const producto = new funcion("Cuaderno", 50, 30);
const producto2 = new funcion("Lapiz", 10, 12);
const producto3 = new funcion("Tijeras", 10, 3);
// Aumentar la cantidad
producto.aumentar(10);
producto2.aumentar(5);
producto3.aumentar(10);
// Reducir la cantidad
producto.reducir(4);
producto2.reducir(2);
producto3.reducir(4);

