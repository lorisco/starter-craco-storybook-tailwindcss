const fetchJSON = (url) => fetch(url).then(response => response.json());

export const fetchPokemons = ({limit = 10, offset = 0, withDetails = false} = {}) =>
    fetchJSON(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(async ({results}) => {
            if (withDetails) {
                const promises = results.map(result => fetchJSON(result.url));
                const pokemonDetails = await Promise.all(promises);
                return results.map((result, index) => ({
                    ...result,
                    ...pokemonDetails[index],
                }))
            }
            return results;
        });
