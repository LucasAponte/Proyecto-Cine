import { Entrada } from '../domain/entrada.js';
import { Sala } from '../domain/sala.js';
import { Pelicula } from '../domain/pelicula.js';


const sala = new Sala(5, 5); 
const pelicula1 = new Pelicula('Titulo 1', 120, 'Director 1', 'Descripcion de la pelicula 1', 'Accion');
sala.agregarFuncion(pelicula1, '19:00');
const funcion = sala.getFunciones()[0]; // Asumimos que hay al menos una función
export class EntradaController{
    constructor (){}

    crearEntrada(req,res) {
        // Verificar si la función existe
        console.log(req.body);
        const { idFuncion,fila,columna } = req.body
        
        if (!funcion) {
            throw new Error("La función no existe.");
        }
        // Verificar si los asientos están disponibles
        if (funcion.getAsiento(fila, columna).getOcupado()) {
            res.status(400).json({ message: 'El asiento ya está reservado' });
            throw new Error("El asiento ya está reservado.");
        }
        // Crear la entrada
        const entrada = new Entrada(funcion, fila, columna);
        res.status(201).json({
           entrada: entrada.entradaADTO(),
           message: 'Entrada creada exitosamente'
    })
    }

}