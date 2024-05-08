import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
import  {sumar, restar, dividir, multiplicar} from './modules/matematica.js'
import { OMDBGetByImdbID, OMDBSearchByPage, OMDBSearchComplete } from "./modules/omdb-wrapper.js";
import Alumno from "./models/alumno.js";

const app = express();
const port = 3000;

// Agrego los Middlewares

app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

//Agrego array Alumnos

app.get('/', (req, res) => {
    res.status(200).send('¡Ya estoy respondiendo! (200)')
})

app.get('/saludar/:nombre', (req, res) => {
    res.status(200).send('Hola ' + req.params.nombre)
})

app.get('/validarfecha/:ano/:mes/:dia', (req, res) => {
    let fecha = new Date(req.params.ano, req.params.mes, req.params.dia)
    if (!isNaN(fecha)){
        res.status(200).send('OK (200)')
    } else{
        res.status(400).send('Error (404)')
    }
})

app.get('/matematica/sumar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = sumar(req.query.n1, req.query.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/restar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = restar(req.query.n1, req.query.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/multiplicar?n1={numero}&n2={numero}', (req, res) => {
    let resultado = multiplicar(req.query.n1, req.query.n2)
    res.status(200).send('El resultado es ' + resultado + ' (200)') 
})

app.get('/matematica/dividir?n1={numero}&n2={numero}', (req, res) => {
    let resultado = dividir(req.query.n1, req.query.n2)
    if(req.params.n2 != 0){
        res.status(200).send('El resultado es ' + resultado + ' (200)') 
    } else{
        res.status(400).send('El divisor no puede ser 0 (404)')
    }
})

app.get('/omdb/searchbypage', (req, res) => {
    let resultado = OMDBSearchByPage(req.query.search, req.query.p)
    res.status(200).send(resultado + ' (200)')
})

app.get('/omdb/searchcomplete', (req, res) => {
    let resultado = OMDBSearchComplete(req.query.search)
    res.status(200).send(resultado + ' (200)')
})

app.get('/omdb/getbyomdbid', (req, res) => {
    let resultado = OMDBGetByImdbID(req.query.imdbId)
    res.status(200).send(resultado + ' (200)')
})

const alumnosArray = [];
alumnosArray.push(new Alumno("Esteban Dido" , "22888444", 20));
alumnosArray.push(new Alumno("Matias Queroso", "28946255", 51));
alumnosArray.push(new Alumno("Elba Calao" , "32623391", 18));

app.get('/alumnos', (req, res) => {
    res.status(200).send(alumnosArray + ' (200)')
})

app.get('/alumnos/:dni', (req, res) => {
    let resultado = alumnosArray.find((alumno) => alumno.dni === req.params.dni)
    res.status(200).send(resultado + ' (200)')
})

app.post('/alumnos', (req, res) => {
    alumnosArray.push(new Alumno(req.query.nombre, req.query.dni, parseInt(req.query.edad)))
    res.status(201).send('Alumno creado' + ' (201)')
})

app.delete('/alumnos', (req, res) => {
    for(let i = 0; i < alumnosArray.length; i++){
        if(alumnosArray.dni[i] === req.query.dni){
            alumnosArray.delete(alumnosArray[i])
            res.status(200).send('OK (200)')
        }else{
            res.status(404).send('No se encontro (404)')
        }
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



