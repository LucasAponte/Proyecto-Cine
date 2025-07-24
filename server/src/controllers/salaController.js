import { Funcion } from '../domain/funcion.js';
import { Sala } from '../domain/sala.js';
import { Pelicula } from '../domain/pelicula.js';
const sala = new Sala(5, 5); 
const pelicula1 = new Pelicula('Titulo 1', 120, 'Director 1', 'Descripcion de la pelicula 1', 'Accion');
sala.agregarFuncion(pelicula1, '19:00');
export class SalaController{
    constructor() {
        // Initialize any necessary properties or dependencies here
    }

    // Define methods for handling requests related to 'Sala'
    getSalas(req, res) {
        // Logic to retrieve and return all 'Sala' instances
        res.status(200).json(sala.getAsientos());
    }

     async createSala(req, res) {
        // Logic to create a new 'Sala'
        res.status(201).json({ message: 'Sala created successfully' });
    }
    buscarFunciones(req, res) {
        const idSala = req.params.id;
        console.log(`Pedido para obtenerlas funciones de la sala con id: ${idSala}`);
        const funciones = sala.getFunciones();
        if (funciones.length > 0) {
            res.status(200).json(sala.salaADTO());
        } else {
            res.status(404).json({ message: 'No se encontraron funciones en la sala' });
        }
    }
    async reservarAsiento(req, res) {
       const fila = req.body.fila;
       const columna = req.body.columna;
        console.log(`Pedido para reservar el asiento enla fila ${fila}, y la columna ${columna}`);
        const asiento = asientosSala.getAsiento(fila, columna);
        if (asiento && !asiento.getOcupado()) {
            asiento.setOcupado(true);
            res.status(200).json({ message: 'Asiento reservado exitosamente', asiento });
        } else {
            res.status(400).json({ message: 'Asiento no disponible' });
        }
    }
    // Add more methods as needed for other operations (update, delete, etc.)
}