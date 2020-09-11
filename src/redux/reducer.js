export default function reducer(state, action) {
  switch (action.type) {
    case "LATEST_BLOCK": {
      return { ...state, latestBlock: action.payload.latestBlock };
    }

    case "TRANSACTION_BLOCK": {
      // console.log("pase por el reducer trans", action.payload);
      return { ...state, transactions: action.payload.tx };
    }

    default: {
      return state;
    }
  }
}
