import axios from "axios";

const apiKey = '11f72b82'
const apiUrl = 'http://www.omdbapi.com/?apikey='

const OMDBSearchByPage = async (searchText, page = 1) => {
    let obj = {
    respuesta : false,
    resultados : 0,
    data : {}
};
    const request = `${apiUrl}${apiKey}&s=${searchText}&page=${page}`
    const api = await axios.get(request)
    obj.respuesta = api.statusText
    obj.data = api.data.Search
    obj.resultados = api.data.totalResults
    return obj
};

const OMDBSearchComplete = async (searchText) => {

    let obj = {
    respuesta : false,
    resultados : 0,
    data : {}
};
    const request = `${apiUrl}${apiKey}&s=${searchText}`
    const api = await axios.get(request)
    obj.respuesta = api.statusText
    obj.data = api.data.Search
    obj.resultados = api.data.totalResults
    return obj
};

const OMDBGetByImdbID = async (imdbID) => {
    let obj = {
    respuesta : false,
    resultados : 0,
    datos : {}
};
    const request = `${apiUrl}${apiKey}&i=${imdbID}`
    const api = await axios.get(request)
    obj.respuesta = api.statusText
    obj.datos = api.data.Search
    obj.resultados = api.data.totalResults
    return obj
};

export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID};