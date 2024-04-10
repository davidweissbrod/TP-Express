import Alumno from "./models/alumno.js"
import {sumar, restar, multiplicar, dividir} from "./modules/matematica.js"
import {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID} from
"./modules/omdb-wrapper.js"

import express from "express"; 
import cors from "cors"; 
const app = express();
const port = 3000;
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

//End Points
app.get('/', (req, res) => {
    res.status(200).send('¡Ya estoy respondiendo! (200)')
})

app.get('/saludar/:nombre', (req, res) => {
    res.status(200).send('Hola ' + req.params.nombre + ' (200)')
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day){
        res.status(200).send('OK (200)')
    } else{
        res.status(400).send('Error(400)')
    }
})

app.get('/matematica/sumar?n1={5}&n2={9}', (req, res) => {
    res.status(200).send('El resultado es ' + req.params.sumar + ' (200)') 
})

app.get('/matematica/restar?n1={5}&n2={9}', (req, res) => {
    res.status(200).send('El resultado es ' + req.params.restar + ' (200)') 
})

app.get('/matematica/multiplicar?n1={5}&n2={9}', (req, res) => {
    res.status(200).send('El resultado es ' + req.params.multiplicar + ' (200)') 
})

app.get('/matematica/dividir?n1={5}&n2={9}', (req, res) => {
    if(req.params.n2 != 0){
        res.status(200).send('El resultado es ' + req.params.dividir + ' (200)') 
    } else{
        res.status(400).send('El divisor no puede ser 0 (400)')
    }
})

app.get('/omdb/searchbypage?search={texto}&p={pagina}', (req, res) => {
    res.status(200).send(req.params.texto + req.params.pagina + ' (200)')
})

app.get('"/omdb/searchcomplete?search={texto}', (req, res) => {
    res.status(200).send(req.params.texto + ' (200)')
})





app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})
app.get('/saludar', (req, res) => { // EndPoint "/saludar"
res.send('Hello World!');
})
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})



