import axios from "axios";

const key="2a7de952ef56493bb306c7573c208394";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'

})

const  getGenreList=axiosCreate.get('/genres?key='+key);
const  getAllGames=axiosCreate.get('/games?key='+key);
const  getGameListByGenreId=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id);
export default{
    getGenreList,
    getAllGames,
    getGameListByGenreId

}
