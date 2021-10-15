
export const fetchPokemon = (offset) =>
      fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+offset)
          .then(response => response.ok ? response.json() : console.log("Mauvaise réponse réseau"))
          .then(data => data.results)
          .catch(error => console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message));
