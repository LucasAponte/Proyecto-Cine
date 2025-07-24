import { Pelicula } from "./pelicula.js";
import { AsientosSala } from "./asientosSala.js";
// Clase Funcion que representa una función de cine.
// Contiene la película, el horario y los asientos disponibles.
export class Funcion{
    pelicula;
    horario;
    //AsientosSala es una matriz de Asientos.
    asientosSala;
    constructor(filaMax, columnaMax,pelicula, horario) {
        this.pelicula = pelicula;
        this.horario = horario;
        //Inicializo los asientos de la sala.
        this.asientosSala = new AsientosSala(filaMax, columnaMax);
    }
    getPelicula() {
        return this.pelicula;
    }
    getHorario() {
        return this.horario;
    }
    getAsientos() {
        return this.asientosSala.getAsientos();
    }
    getAsiento(fila, columna) {
        return this.asientosSala.getAsiento(fila, columna);
    }
    reservarAsiento(fila, columna) {
        this.asientosSala.reservarAsiento(fila, columna);
    }
    // Método para obtener los asientos disponibles.
    getAsientosDisponibles() {
        return this.asientosSala.obtenerAsientosLibres();
    }
    funcionADTO() {
        return {
            pelicula: this.pelicula.getTitulo(),
            horario: this.horario,
            asientos: this.asientosSala.asientosADTO()
        };
    }   
    asientoFueraDeRango(fila, columna) {
        return fila < 1 || fila >= this.asientosSala.getCantFilas() || columna < 1 || columna >= this.asientosSala.getCantColumnas();
    }
}