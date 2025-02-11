"use strict";
/*

Agregue la clase abstracta producto ya que me sirve para que exista mi producto
por que abstracta, porque ahi defino las propiedades de mis productos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports._Producto = void 0;
var _Producto = /** @class */ (function () {
    //Aqui genero mi constructor para iniciar los datos del producto
    function _Producto(nombre, cantidad, precio) {
        this._nombreProducto = nombre;
        this._productoCantidad = cantidad;
        this._precioProducto = precio;
    }
    Object.defineProperty(_Producto.prototype, "nombre", {
        //Uso getters 
        get: function () {
            return this._nombreProducto;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Producto.prototype, "cantidad", {
        get: function () {
            return this._productoCantidad;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_Producto.prototype, "precio", {
        get: function () {
            return this._precioProducto;
        },
        enumerable: false,
        configurable: true
    });
    //Aqui genero un metodo para ver la cantidad disponible igualmente usando polimorfismo
    _Producto.prototype.cantidadDisponible = function () {
        console.log("Quedan ".concat(this._productoCantidad, " unidades de ").concat(this._nombreProducto, "."));
    };
    return _Producto;
}());
exports._Producto = _Producto;
