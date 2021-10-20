import {useEffect, useState} from "react";
import {fetchPokemon, fetchPokemonDetails} from "./fetchPokemon";

export const useFetchList = (offset) => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetchPokemon(offset).then((list) => {
            // console.log(list);
            //
            // let i = 0;
            // for (i = 0; i < list.length; i++) {
            //     fetchPokemonDetails(list[i].name).then((list) => {
            //
            //     });
            // }

            setResult([...result, ...list]);
        })
    }, [offset]);

    //console.log(result);

    return result;
}
