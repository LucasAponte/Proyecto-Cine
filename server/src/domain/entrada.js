export class Entrada{
    funcion;
    cliente;
    fila;
    columna;

    constructor(funcion,fila, columna) {
        this.cliente = "cliente1"; // Placeholder del cliente, debería ser un objeto Cliente real
        this.funcion = funcion;
        this.fila = fila;
        this.columna = columna;
        this.funcion.reservarAsiento(fila, columna);
    }
    getFuncion() {
        return this.funcion;    
    }
    getSala() {
        return this.sala;
    }
    getCliente() {
        return this.cliente;
    }
    entradaADTO() {
        return {
            funcion: this.funcion.getPelicula().getTitulo(),
            horario: this.funcion.getHorario(),
            fila: this.fila+1, 
            columna: this.columna+1,
            precio: this.funcion.getAsiento(this.fila, this.columna).getPrecio()
        };
    }
}   