import {createReducer, createAction} from "@reduxjs/toolkit";

export const putTeamState = createAction('teamsPick/putTeamState', (team) => {
  return {
    payload: {
      team
    },
  }
});

const initialState = {
  teamsPick: {
    team: null},
};

const teamsPickReducer = createReducer(initialState, (builder) => {
  builder.addCase(putTeamState, (state, action) => {
    state.teamsPick = action.payload;
  });
});

export default teamsPickReducer;