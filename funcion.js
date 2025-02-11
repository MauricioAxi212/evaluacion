"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcion = void 0;
var producto_1 = require("./producto");
var funcion = /** @class */ (function (_super) {
    __extends(funcion, _super);
    //Llamo a mi constructor de mi clase principal que es producto
    function funcion(nombre, cantidad, precio) {
        return _super.call(this, nombre, cantidad, precio) || this;
    }
    /*aqui ya estoy implementando el metodo aumentar...
        lo hare con un while para darle funcionalidad al momento
        de aumentar*/
    funcion.prototype.aumentar = function (cantidad) {
        var i = 0;
        while (i < cantidad) {
            //incrementamos la cantidad
            this[this._productoCantidad];
            i++;
        }
        console.log("Se agregaron: ".concat(cantidad, " ").concat(this._nombreProducto, "."));
    };
    //Genero el metodo reducir, igualmente lo hare con un while
    funcion.prototype.reducir = function (cantidad) {
        var i = 0;
        while (i < cantidad && this._productoCantidad) {
            this[this._productoCantidad]--;
            i++;
        }
        //Aqui implemento una condicion y si el usuario pone mas de la cantidad le mandara que no hay stock disponible
        if (i === cantidad) {
            console.log("".concat(cantidad, " cantidad disponible de: ").concat(this._nombreProducto, "."));
        }
        else {
            console.log("No hay stock disponible. Solo quedan ".concat(this[this._nombreProducto], " del producto: ").concat(this.nombre, "  "));
        }
    };
    return funcion;
}(producto_1._Producto));
exports.funcion = funcion;
