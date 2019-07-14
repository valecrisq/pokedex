import React from 'react';
import Pokemon from './Pokemon';

const PokemonList = ({pokemonList}) => {

    const list = [...pokemonList];
    list.sort((a, b) => a.name.localeCompare(b.name));

    return list.map((pokemon) => {
        return (
            <tr id={pokemon.num} key={pokemon.num}>
                <Pokemon pokemon={pokemon} />
            </tr>
        )
    })


}

export default PokemonList; 