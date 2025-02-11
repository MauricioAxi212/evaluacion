/*   

Agregue la clase abstracta producto ya que me sirve para que exista mi producto
por que abstracta, porque ahi defino las propiedades de mis productos
*/

 export abstract class _Producto {
    _nombreProducto: string;
     _productoCantidad: number;
     _precioProducto: number;
    //Aqui genero mi constructor para iniciar los datos del producto
    constructor(nombre: string, cantidad: number, precio: number) {
        this._nombreProducto = nombre;
        this._productoCantidad = cantidad;
        this._precioProducto = precio;
    }

    //Uso getters 
    get nombre(): string {
        return this._nombreProducto
    }

    get cantidad(): number {
        return this._productoCantidad
    }

    get precio(): number {
        return this._precioProducto
    }

    //Genero o creo un metodo para yo asi aumentar la cantidad usando polimorfismo

    abstract aumentar(cantidad: number): void;

    abstract reducir(cantidad: number): void;

    //Aqui genero un metodo para ver la cantidad disponible igualmente usando polimorfismo

    cantidadDisponible(): void {
        console.log(`Quedan ${this._productoCantidad} unidades de ${this._nombreProducto}.`);
    }
}