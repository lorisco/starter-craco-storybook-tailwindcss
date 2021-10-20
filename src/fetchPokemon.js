export const fetchPokemon = (offset) =>
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + offset)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.log(error)
        });

export const fetchPokemonDetails = (poke_name) =>
    fetch('https://pokeapi.co/api/v2/pokemon/' + poke_name)
        .then(response => response.json())
        .then(data => data.results)
        .catch(error => {
            console.log(error)
        });
