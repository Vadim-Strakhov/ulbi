import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: ["выучить react", "выучить redux", "выучить typescript"],
};

export const incrementToolkit = createAction("INCREMENT");
export const decrementToolkit = createAction("DECREMENT");

// export default createReducer(initialState, {
//   [incrementToolkit]: function (state) {
//     state.count = state.count + 1;
//   },
//   [decrementToolkit]: function (state) {
//     state.count = state.count - 1;
//   },
// });

export default createReducer(initialState, (builder) => {
  builder.addCase(incrementToolkit, (state) => {
    state.count = state.count + 1;
  });
  builder.addCase(decrementToolkit, (state) => {
    state.count = state.count - 1;
  });
});
