export const POKEMON_BY_NAME = 'POKEMON_BY_NAME';

export const matchedPokemon = pokemon => ({
    type: POKEMON_BY_NAME,
    pokemon,
});