import express from "express"
import { SalaController } from "./src/controllers/salaController.js";
import { EntradaController } from "./src/controllers/entradaController.js";
//import dotenv from 'dotenv';
//dotenv.config();
const PORT = 3000;
const port = PORT;
const app = express();
const salaController = new SalaController();
const entradaController = new EntradaController();
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/healthCheck', (req, res) => {
    res.status(200).json({mensaje:'Todo marcha bien!'})
  })
app.listen(port, () => {
    console.log(`Servidor de CineRuka escuchando en el puerto: ${port}`)
  })
app.get('/sala/:id/funcion', (req, res) => {
    salaController.buscarFunciones(req, res);
})
app.post('/entrada', (req, res) => {
    entradaController.crearEntrada(req, res);
})
