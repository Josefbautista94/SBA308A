axios.defaults.baseURL = "https://pokeapi.co/api/v2/"

const searchInput = document.getElementById("pokeSearch")
const searchButton = document.getElementById("pokeButton")
const displayDiv = document.getElementById("pokemonImageDiv")


async function getPokiData(name) {
    try {
      // Get main Pokémon data
      const res = await axios.get(`/pokemon/${name}`);
      const data = res.data;
  
      // Clear previous content
      displayDiv.innerHTML = "";
  
      // Create and add image
      const pokeImg = document.createElement("img");
      pokeImg.src = data.sprites.front_default;
      pokeImg.alt = data.name;
      pokeImg.style.width = "300px";
      displayDiv.appendChild(pokeImg);
  
      // Get species data to grab summary
      const speciesRes = await axios.get(`/pokemon-species/${name}`);
      const flavorEntry = speciesRes.data.flavor_text_entries.find(
        entry => entry.language.name === "en"
      );
  
      // Clean the flavor text
      const flavorText = flavorEntry
        ? flavorEntry.flavor_text.replace(/\f|\n/g, " ") // Not a regex fan
        : "No summary available.";
  
      // Display summary
      const summaryDiv = document.querySelector(".descriptionDiv");
      summaryDiv.innerText = flavorText;
  
    } catch (error) {
      console.log(`There was an error: ${error}`);
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