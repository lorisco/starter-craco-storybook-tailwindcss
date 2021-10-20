import {useEffect, useState} from "react";
import {fetchPokemons} from "./fetchPokemon";

export const useFetchList = (offset) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetchPokemons({ offset: offset, withDetails: true }).then((list) => {
            setResult([...result, ...list]);
        })
    }, [offset]);

    return result;
}
