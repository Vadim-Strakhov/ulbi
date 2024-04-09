const defaultState = {
  cash: 0,
};

export const ADD_CASH = "ADD_CASH";
export const GET_CASH = "GET_CASH";

export const INCREMENT_CASH = "INCREMENT_CASH";
export const DECREMENT_CASH = "DECREMENT_CASH";

export const ASYNC_INCREMENT_CASH = "ASYNC_INCREMENT_CASH";
export const ASYNC_DECREMENT_CASH = "ASYNC_DECREMENT_CASH";

export const cashReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CASH:
      return { ...state, cash: state.cash + action.payload };
    case GET_CASH:
      return { ...state, cash: state.cash - action.payload };
    case INCREMENT_CASH:
      return { ...state, cash: state.cash + 100 };
    case DECREMENT_CASH:
      return { ...state, cash: state.cash - 100 };
    default:
      return state;
  }
};

export const addCushAction = (payload) => ({ type: ADD_CASH, payload });
export const getCushAction = (payload) => ({ type: GET_CASH, payload });

export const incrementCash = (payload) => ({ type: INCREMENT_CASH, payload });
export const decrementCash = (payload) => ({ type: DECREMENT_CASH, payload });

export const asyncIncrementCash = (payload) => ({
  type: ASYNC_INCREMENT_CASH,
  payload,
});
export const asyncDecrementCash = (payload) => ({
  type: ASYNC_DECREMENT_CASH,
  payload,
});
