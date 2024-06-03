// async / await 
// async = assincrono. serve para dizer para o javascript que os outros codigos devem continuar carregando enquanto a chamada para a api e realizada
// await = esperar. serve para dizer para o javascript que ele deve "esperar" a resposta da chamada 

const getPokemon = async () => {
    // arrowFunction (funcao anonima)
    // chama a as informacoes do api do pokemon//     
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/151").then(response => response.json())
    console.log(pokemon)    

    //chama a funcao createPokemonCard passando as informacoes do pokemon da linha 8
    createPokemonCard(pokemon)
}
    getPokemon()

    
function createPokemonCard(pokemon) {
    
    console.log(pokemon.id)
    console.log(pokemon["sprites"]["other"]["official-artwork"]["front_default"]) 
    console.log(pokemon["stats"]["0"]["base_stat"])

    //pega o elemento html com o id "pokemon-cards" 
    
    const body = document.getElementById("pokemon")
    const pokemonCards = document.createElement("div")
    body.appendChild(pokemonCards)

    pokemonCards.classList.add("card")

    // criar um elemento h3
    const title = document.createElement("h3")
    title.textContent =  "Nº" + pokemon.id + " - " + pokemon.name
    pokemonCards.appendChild(title)

    const frame = document.createElement("div")
    frame.classList.add("frame")
    pokemonCards.appendChild(frame)

    const img = document.createElement("img")
    // alterar o elemento adicionando url da img dentro da img
    img.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"]
    img.classList.add("image")
    frame.appendChild(img)
    
    const li = document.createElement("li")
    li.textContent = "HP: " + pokemon["stats"]["0"]["base_stat"]
    li.classList.add("item-atribute")
    pokemonCards.appendChild(li)  

    const li1 = document.createElement("li")
    li1.textContent = "Attack: " + pokemon["stats"]["1"]["base_stat"]
    console.log(li1.textContent)
    li1.classList.add("item-atribute")
    pokemonCards.appendChild(li1)

    const li2 = document.createElement("li")
    li2.textContent = "Defense: " + pokemon["stats"]["2"]["base_stat"]
    li2.classList.add("item-atribute")
    pokemonCards.appendChild(li2) 

    const li3 = document.createElement("li")
    li3.textContent = "Special-attack: " + pokemon["stats"]["3"]["base_stat"]
    li3.classList.add("item-atribute")
    pokemonCards.appendChild(li3)

    const li4 = document.createElement("li")
    li4.textContent = "Special-defense: " + pokemon["stats"]["4"]["base_stat"]
    li4.classList.add("item-atribute")
    pokemonCards.appendChild(li4)

    const li5 = document.createElement("li")
    li5.textContent = "Speed: " + pokemon["stats"]["5"]["base_stat"]
    li5.classList.add("item-atribute")
    pokemonCards.appendChild(li5)

}
