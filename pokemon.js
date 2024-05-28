    //async / await 
    // async = assincrono. serve para dizer para o javascript que os outros codigos devem continuar carregando enquanto a chamada para a api e realizada
    // await = esperar. serve para dizer para o javascript que ele deve "esperar" a resposta da chamada 
const getPokemon = async () => {

    // arrowFunction (funcao anonima)
    // chama a as informacoes do api do pokemon//     
    const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/8").then(response => response.json())
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
       
            const pokemonCards = document.getElementById("pokemon-cards")
            console.log(pokemonCards)
        
            // criar um elemento h2
            const title = document.createElement("h2")
            // alterar o elemento adicionando o nome e id do pokemon  
            title.textContent =  "Nº" + pokemon.id + " - " + pokemon.name
            
            // criar um elemento img 
           const img = document.createElement("img")
            console.log(img)
            // alterar o elemento adicionando url da img dentro da img
            img.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"]
                
            //criar um uma tag li 
            
            const li = document.createElement("li")
            console.log(li)

            //adicionar o texto "hp" e o valor do hp dentro da li criada acima 
         
            li.textContent = "HP: " + pokemon["stats"]["0"]["base_stat"]
            
            const li1 = document.createElement("li")
            console.log(li1)

            li1.textContent = "Attack: " + pokemon["stats"]["1"]["base_stat"]
            console.log(li1.textContent)

            const li2 = document.createElement("li")

            li2.textContent = "Defense: " + pokemon["stats"]["2"]["base_stat"]

            const li3 = document.createElement("li")

            li3.textContent = "Special-attack: " + pokemon["stats"]["3"]["base_stat"]

            const li4 = document.createElement("li")

            li4.textContent = "Special-defense: " + pokemon["stats"]["4"]["base_stat"]

            const li5 = document.createElement("li")

            li5.textContent = "Speed: " + pokemon["stats"]["5"]["base_stat"]


            // adiciona a tag que esta na variavel title dentro da tag que esta no pokemonCards 
        pokemonCards.appendChild(title)
        // adiciona a tag que esta na variavel img dentro da tag que esta no pokemonCards     
        pokemonCards.appendChild(img)    
        pokemonCards.appendChild(li)  
        pokemonCards.appendChild(li1)
        pokemonCards.appendChild(li2) 
        pokemonCards.appendChild(li3)
        pokemonCards.appendChild(li4)
        pokemonCards.appendChild(li5)
        // pokemonCards.appendChild(li4)

       console.log(pokemon)
       console.log(pokemon.name)
        console.log(pokemon.weight)
         
     
    
    }

    







 