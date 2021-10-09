import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";
import TeamsApi from "../services/TeamsApi";


export const getTeamsData = createAsyncThunk('teams/getData', async () => {
  const api = new TeamsApi();
  const result = await api.get();

  return result;
});

const initialState = {
  teamsData: undefined,
};

const teamsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTeamsData.fulfilled, (state, action) => {
    state.teamsData = action.payload;
  });
});

export default teamsReducer;