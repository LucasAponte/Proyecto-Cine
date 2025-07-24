import { Asiento } from "./asiento.js";
export class AsientosSala {
  asientos;
  cantFilas;
  CantColumnas;
  constructor(filaMax, columnaMax) {
    this.asientos = this.crearAsientos(filaMax, columnaMax);
    this.cantFilas = filaMax;
    this.CantColumnas =columnaMax;
  }

  //Asumo que hay un solo tipo de asiento por ahora.
  crearAsientos(filaMax, columnaMax) {
    const matriz = [];
    for (let i = 0; i < filaMax; i++) {
      const fila = [];
      for (let j = 0; j < columnaMax; j++) {
        fila.push(new Asiento(1500));
      }
      matriz.push(fila);
    }
    return matriz;
  }

  obtenerAsientosLibres() {
    return this.asientos.flat().filter((asiento) => !asiento.getOcupado());
  }

  reservarAsiento(fila, columna) {
    const asiento = this.getAsiento(fila, columna);
    if (asiento && !asiento.getOcupado()) {
      asiento.setOcupado(true);
      return true; // Reserva exitosa
    }
    return false; // Asiento no disponible
  }
  asientosADTO() {
    const asientosDTO= [];
    for (let i = 0; i < this.cantFilas; i++) {
      const fila = [];
      const nroFila = i;
      for (let j = 0; j < this.CantColumnas; j++) {
        const nroColumna = j;
        const asiento = this.getAsiento(nroFila,nroColumna).asientoADTO()
        fila.push({
            fila:nroFila+1,
            columna:nroColumna+1,
            asiento:asiento
        });
      }
      asientosDTO.push(fila);
    }
    return asientosDTO
  }
  getAsiento(fila, columna) {
    return this.asientos[fila][columna];
  }
  getAsientos() {
    return this.asientos;
  }
    getCantFilas() {
        return this.cantFilas;
    }
    getCantColumnas() {
        return this.CantColumnas;
    }
}
