import axios from 'axios';


axios.defaults.baseURL = "https://pokeapi.co/api/v2/"



async function getPokiData(name){

    try{
        const res = await axios.get(`/pokemon/${name}`)
        console.log(res.data)
    }
    catch(error){
console.log(`There was an error : ${error}`)
    }
}

getPokiData("mewtwo")