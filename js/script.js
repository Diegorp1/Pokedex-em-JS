(async () => {
    let pokemonName = document.querySelector('.pokemon_name');
    let pokemonNumber = document.querySelector('.pokemon_number');
    let pokemonImage = document.querySelector('.pokemon_image');

    const fetchPokemon = async (pokemon) => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const json = await data.json();

        return {
            name: json.name,
            id: json.id,
            image: json['sprites']['versions']['generation-v']['black-white']['animated']['front_default'],
        }
    }

    const renderPokemon = (pokemon) => {
        pokemonName.innerHTML = pokemon.name;
        pokemonNumber.innerHTML = pokemon.id;
        pokemonImage.src = pokemon.image;
    }

    document.getElementById("anterior").onclick = async () => {
        let pokemonIndex = pokemonNumber.innerHTML;
        pokemonIndex = parseInt(pokemonIndex) - 1;
        const pokemon = await fetchPokemon(pokemonIndex);
        renderPokemon(pokemon);
    }

    document.getElementById("proximo").onclick = async () => {
        let pokemonIndex = pokemonNumber.innerHTML;
        pokemonIndex = parseInt(pokemonIndex) + 1;
        const pokemon = await fetchPokemon(pokemonIndex);
        renderPokemon(pokemon);
    }

    document.getElementById("pesquisa").onchange = async (event) => {
        event.preventDefault();
        let inputPesquisa = event.target.value.toLowerCase();
        const pokemon = await fetchPokemon(inputPesquisa);
        renderPokemon(pokemon);
    }

    const pokemon = await fetchPokemon(10);
    renderPokemon(pokemon);


})()




