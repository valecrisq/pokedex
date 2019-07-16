import { POKEMON_BY_NAME } from '../actions/pokemon';

const pokemon = (state = '', action) => {
    switch (action.type) {
        case POKEMON_BY_NAME: {
            const { pokemon } = action;

            return pokemon;
        }

        default:
            return state;
    }
}

export default pokemon;
