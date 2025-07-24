import { Funcion } from "./funcion.js";
export class Sala {
    filaMax;
    columnaMax;
    funciones;
    constructor(filaMax, columnaMax) {
        this.filaMax = filaMax;
        this.columnaMax = columnaMax;
        this.funciones = [];
    }
    agregarFuncion(pelicula,horario) {
        this.funciones.push(new Funcion(this.filaMax, this.columnaMax,pelicula,horario));
    }
    getFunciones() {
        return this.funciones;
    }
    salaADTO() {
        return {
            funciones: this.funciones.map(funcion => funcion.funcionADTO())
        };
    }
 }