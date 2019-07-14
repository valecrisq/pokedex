import React from 'react';
import PokemonNextEvolution from './PokemonNextEvolution'

const PokemonNextEvolutionList = ({ pokemon }) => {

    return (
        <ul>
            {
                pokemon.next_evolution.map((evolution) => {
                    return <li key={evolution.num}>
                        <PokemonNextEvolution evolution={evolution} />
                    </li>
                })
            }
        </ul>
    )
}

export default PokemonNextEvolutionList;