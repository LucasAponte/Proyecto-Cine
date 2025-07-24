export class Asiento {
    ocupado;
    precio;
    constructor(precio) {
        this.ocupado = false;
        this.precio = precio;
    }
    getOcupado() {
        return this.ocupado;
    }
    getPrecio() {
        return this.precio;
    }
    setOcupado(ocupado) {
        this.ocupado = ocupado;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    asientoADTO() {
        return {
            ocupado: this.ocupado,
            precio: this.precio
        };
    }
}