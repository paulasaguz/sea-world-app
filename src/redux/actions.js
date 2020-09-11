export const setPokemonList = (latestBlock) => {
  return {
    type: "LATEST_BLOCK",
    payload: { latestBlock },
  };
};

export const setTransactions = (transactions) => {
  return {
    type: "TRANSACTION_BLOCK",
    payload: transactions,
  };
};
