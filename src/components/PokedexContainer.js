import React, { useEffect, useState } from 'react';
import PokemonList from './PokemonList';

import axios from 'axios';


const PokedexContainer = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const api = "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

    async function getPokemonList() {
        const response = await axios.get(api);
        setPokemonList(response.data.pokemon)
    }

    useEffect(() => {
        getPokemonList();
    }, [])

    return (
        <div>
            <table className='table is-bordered is-striped is-narrow is-hoverable is-fullwidth'>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Number
                        </th>
                        <th>
                            Type
                        </th>
                        <th>
                            Height
                        </th>
                        <th>
                            Weight
                        </th>
                        <th>
                            Weaknesses
                        </th>
                        <th>
                            Next Evolutions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <PokemonList pokemonList={pokemonList} />
                </tbody>
            </table>
        </div>
    )
}

export default PokedexContainer;