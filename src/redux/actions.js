export const setPokemonList = (pokemonList) => {
  return {
    type: "POKEMON_LIST",
    payload: { pokemonList },
  };
};
