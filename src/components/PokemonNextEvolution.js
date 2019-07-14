import React from 'react';

const PokemonNextEvolution = ({evolution}) => (
    <div>
       <a href={`#${evolution.num}`}>{evolution.name}</a> 
    </div>
)

export default PokemonNextEvolution;