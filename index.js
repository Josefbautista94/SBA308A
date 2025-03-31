axios.defaults.baseURL = "https://pokeapi.co/api/v2/"

const searchInput = document.getElementById("pokeSearch")
const searchButton = document.getElementById("pokeButton")


async function getPokiData(name){

    try{
        const res = await axios.get(`/pokemon/${name}`)
        console.log(res.data)
    }
    catch(error){
console.log(`There was an error : ${error}`)
    }
}

searchInput.addEventListener("keydown", (event) =>{
    if(event.key ==="Enter"){
        const query = searchInput.value.trim().toLowerCase();
        if(query){
            getPokiData(query)
        }
    }
})

searchButton.addEventListener("click",() =>{
    const query = searchInput.value.trim().toLowerCase()
    if(query){
        getPokiData(query)
    }

})