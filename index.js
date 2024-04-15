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
    res.status(200).send('Hola ' + req.params.nombre)
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    let fecha = req.params.ano + '-' + req.params.mes + '-' + req.params.dia
    let numFecha = Date.parse(fecha)
    if (numFecha != null){
        res.status(200).send('OK (200)')
    } else{
        res.status(400).send('Error (404)')
    }
})

app.get('/matematica/sumar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = sumar(req.params.n1, req.params.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/restar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = restar(req.params.n1, req.params.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/multiplicar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = multiplicar(req.params.n1, req.params.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/dividir?n1={numero}&n2={numero}', (req, res) => {
    let resultado = dividir(req.params.n1, req.params.n2)
    if(req.params.n2 != 0){
        res.status(200).send('El resultado es ' + resultado + ' (200)') 
    } else{
        res.status(400).send('El divisor no puede ser 0 (404)')
    }
})

app.get('/omdb/searchbypage?search={texto}&p={pagina}', (req, res) => {
    res.status(200).send(req.params.texto + req.params.pagina + ' (200)')
})

app.get('/omdb/searchcomplete?search={texto}', (req, res) => {
    res.status(200).send(req.params.texto + ' (200)')
})

app.get('/omdb/getbyomdbid?imdbID={imdb}', (req, res) => {
    res.status(200).send(req.params.imdb + ' (200)')
})

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', (req, res) => {
    res.status(200).send(req.params.alumnos + ' (200)')
})

app.get('/alumnos/:dni', (req, res) => {
    let resultado = alumnosArray.find(req.params.dni)
    res.status(200).send(resultado + ' (200)')
})

app.post('/alumnos', (req, res) => {
    let resultado = alumnosArray.push(req.body)
    res.status(201).send(resultado + ' (201)')
})

app.delete('/alumnos', (req, res) => {
    if(alumnosArray.find(req.body.dni)){
        res.status(200).send('OK (200)')
    } else{
        res.status(404).send('No se encontro (404)')
    }
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



