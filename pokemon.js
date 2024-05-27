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

        //pega o elemento html com o id "pokemon-cards" 
        const pokemonCards = document.getElementById("pokemon-cards")
        console.log(pokemonCards)
    
        // criar um elemento h2
        const title = document.createElement("h2")
        // alterar o elemento adicionando o nome e id do pokemon  
        title.textContent = pokemon.name+ ' ' + pokemon.id
        
        // criar um elemento img 
        const img = document.createElement("img")
        console.log(img)
        // alterar o elemento adicionando url da img dentro da img
        img.src = pokemon["sprites"]["other"]["official-artwork"]["front_default"]

        // adiciona a tag que esta na variavel title dentro da tag que esta no pokemonCards 
        pokemonCards.appendChild(title)
        
        // adiciona a tag que esta na variavel img dentro da tag que esta no pokemonCards     
        pokemonCards.appendChild(img)    
        




       console.log(pokemon)
       console.log(pokemon.name)
        console.log(pokemon.weight)

     
    
    }

    







 