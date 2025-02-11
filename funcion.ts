
import {_Producto} from './producto'
 export class funcion extends _Producto{
    //Llamo a mi constructor de mi clase principal que es producto
    constructor(nombre: string, cantidad: number, precio: number){
        super(nombre, cantidad, precio)
    }

    /*aqui ya estoy implementando el metodo aumentar... 
        lo hare con un while para darle funcionalidad al momento
        de aumentar*/

    aumentar(cantidad: number): void {
        let i = 0;
        while(i < cantidad ){
             //incrementamos la cantidad
            this[this._productoCantidad];
            i++;
        }
    console.log(`Se agregaron: ${cantidad} ${this._nombreProducto}.`);
    }

    //Genero el metodo reducir, igualmente lo hare con un while
    reducir(cantidad: number): void {
        let i = 0;
        while(i < cantidad && this._productoCantidad){
            this[this._productoCantidad]--;
            i++;
        }
        //Aqui implemento una condicion y si el usuario pone mas de la cantidad le mandara que no hay stock disponible
    if( i === cantidad){
     console.log(`${cantidad} cantidad disponible de: ${this._nombreProducto}.`);
    }else{
        console.log(`No hay stock disponible. Solo quedan ${this[this._nombreProducto]} del producto: ${this.nombre}  `);    
    }

    }

}