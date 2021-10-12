import {createReducer, createAction} from "@reduxjs/toolkit";

export const putDateState = createAction('datePick/putDateState', (date) => {
  return {
    payload: {
      date
    },
  }
});

const initialState = {
  datePick: {
    date: null},
};

const datePickReducer = createReducer(initialState, (builder) => {
  builder.addCase(putDateState, (state, action) => {
    state.datePick = action.payload;
  });
});

export default datePickReducer;