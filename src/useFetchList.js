import {useEffect, useState} from "react";
import {fetchPokemon} from "./fetchPokemon";

export const useFetchList = (offset) => {
    const [result, setResult] = useState({
        list: []
    });

    useEffect(() => {
        fetchPokemon(offset).then((list) => {
            setResult({
                list,
            });
        });
    }, [offset]);

    return result;
}
