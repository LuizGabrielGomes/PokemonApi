
const getPokemon = async () => {

    // arrowFunction (funcao anonima)
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/150").then(response => response.json())
    console.log(pokemon)
    return pokemon.name
}

getPokemon().then(pokemons => pokemons)

const pokemon = Promise.all([getPokemon()]).then(pokemons => {
    pokemons.forEach(pokemon => console.log(pokemon));
});


    // const pokemon = {
    //     "name": "mewtwo",
    //     "number": 150,
    //     "hp": 45,
    //     "attack": 49,
    //     "defense": 49,
    //     "special-attack": 65,
    //     "special-defense": 60,
    //     "speed": 50
    // }

    // console.log("object", pokemon);
    // console.log("name",pokemon.name)
    // console.log("number",pokemon.number)
    // console.log(pokemon.name + " " + pokemon.number)
     
    







 