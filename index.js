axios.defaults.baseURL = "https://pokeapi.co/api/v2/"

const searchInput = document.getElementById("pokeSearch")
const searchButton = document.getElementById("pokeButton")
const displayDiv = document.getElementById("pokemonImageDiv")


async function getPokiData(name){

    try{
        const res = await axios.get(`/pokemon/${name}`)
        const data = res.data;

        console.log(data)

        displayDiv.innerHTML = "" //Clearing Previous Pokemon
        const pokeImg = document.createElement("img")
            pokeImg.src = data.sprites.front_default;
            pokeImg.alt = data.namel
            pokeImg.style.width = "300px"
            displayDiv.appendChild(pokeImg)
        
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