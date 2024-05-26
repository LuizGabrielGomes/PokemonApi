
const getPokemon = async () => {

    // arrowFunction (funcao anonima)
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/5").then(response => response.json())
    console.log(pokemon)    
    createPokemonCard(pokemon)
}
    getPokemon()

    
    function createPokemonCard(pokemon) {
       
    console.log(pokemon.id)
    
        const pokemonCards = document.getElementById("pokemon-cards")
        console.log(pokemonCards)
    
        const name = document.createElement("h2")
        name.textContent = pokemon.name+ ' ' + pokemon.id+ ' ' +pokemon.weight
        
       
       console.log(pokemon.name)
        console.log(pokemon.weight)


        pokemonCards.appendChild(name)    
     
    
    
    }

    







 