export default function reducer(state, action) {
  switch (action.type) {
    case "POKEMON_LIST": {
      console.log("pase por el reducer");
      return { ...state, pokemonList: action.payload.pokemonList };
    }

    default: {
      return state;
    }
  }
}
