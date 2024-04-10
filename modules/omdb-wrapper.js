import axios from "axios";
const APIKEY = "7b62fa5d";
const OMDB_API_URL = "https://www.omdbapi.com/"
const OMDBSearchByPage = async (searchText, page = 1) => {
    try{
        const response = await axios.get(OMDB_API_URL,{
            params: {
                apikey: APIKEY,
                s: searchText,
                page: page
            }
        });
        return response.data
    }catch(error){
        console.log('No se encontro la pagina: ', error)
        return null;
    }  
};

const OMDBSearchComplete = async (searchText) => {
    try{
        const response = await axios.get(OMDB_API_URL,{
            params: {
                apikey: APIKEY,
                s: searchText,
            }
        });
        return response.data
    }catch(error){
        console.log('No se encontro la pagina: ', error)
        return null;
    }  
};
const OMDBGetByImdbID = async (imdbID) => {
    try{
        const response = await axios.get(OMDB_API_URL,{
            params: {
                apikey: APIKEY,
                i: imdbID
            }
        });
        return response.data
    }catch(error){
        console.log('No se encontro la pagina: ', error)
        return null;
    }  

};
// Exporto todo lo que yo quiero exponer del módulo:
export {OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID}