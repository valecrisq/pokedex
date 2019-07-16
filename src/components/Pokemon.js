import React from 'react';
import PokemonNextEvolutionList from './PokemonNextEvolutionList';

const Pokemon = ({ pokemon }) => (
        <>
                <td>
                        {pokemon.name}
                </td>
                <td>
                        <img src={pokemon.img} alt={pokemon.name} width='70' />
                </td>
                <td>
                        {pokemon.num}
                </td>
                <td>
                        {pokemon.type.join()}
                </td>
                <td>
                        {pokemon.height}
                </td>
                <td>
                        {pokemon.weight}
                </td>
                <td>
                        {pokemon.weaknesses.join()}
                </td>
                {
                        pokemon.next_evolution &&
                        <td>
                                <PokemonNextEvolutionList pokemon={pokemon} />
                        </td>
                }
        </>
);

export default Pokemon;
