import React, { useState } from 'react';
import { connect } from 'react-redux';

import { matchedPokemon } from '../actions/pokemon';

const Searchbar = ({ pokemonList, dispatch }) => {
    const [pokemon, setPokemon] = useState('');

    const searchedPokemon = pokemonList.find((pokemonFromList) => {
        return pokemonFromList.name === pokemon
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchedPokemon) {
            dispatch(matchedPokemon({ pokemon }));
            return window.document.getElementById(searchedPokemon.num)
        } else {
            alert("Sorry! This pokemon doesn't exists!");
        }
    };


    return (
        <nav className="navbar">
            <div className='navbar-brand'>
                <div className="control">
                    <form onSubmit={event => handleSubmit(event)}>
                        <input
                            className='input is-rounded is-info'
                            type="text"
                            maxLength="20"
                            placeholder="Search Pokemon"
                            onChange={event => setPokemon(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1))}
                        />
                    </form>
                </div>
            </div>
        </nav>
    )
};

const mapStateToProps = ({ pokemon }) => ({ pokemon });
export default connect(mapStateToProps)(Searchbar);
