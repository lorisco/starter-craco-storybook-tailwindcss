import {useEffect, useState} from "react";

const useFetch = ({offset} = {offset: 0}) => {
    const [result, setResult] = useState({list: []});

    useEffect(() => {

        useFetchList(offset).then(setResult);

    }, [offset]);

    return {result};
};

function useFetchList(offset)
{
    return fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+offset)
        .then(response => response.ok ? response.json() : console.log("Mauvaise réponse réseau"))
        .then(data => data.results())
        .catch(error => console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message));
}

export const App = () => {
    const [offset, setOffset] = useState(0);
    const {result} = useFetch({offset});

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div>
                <ul>
                {result.list.map(poke => (
                    <li key={poke.url}>{poke.name}</li>
                ))}
                </ul>
                <button className="border-2" onClick={(handleChange) => setOffset(offset + 10)}>
                    Voir plus
                </button>
            </div>
        </div>
    );
}
