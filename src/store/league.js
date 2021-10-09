import LeagueApi from "../services/LeagueApi";
import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";


export const getLeagueData = createAsyncThunk('league/getData', async () => {
  const api = new LeagueApi()
  const result = await api.get();

  return result;
});

const initialState = {
  data: undefined,
};

const leagueReducer = createReducer(initialState, (builder) => {
  builder.addCase(getLeagueData.pending, (state) => {
    state.data = undefined;
  });

  builder.addCase(getLeagueData.fulfilled, (state, action) => {
    state.data = action.payload;
  });
});

export default leagueReducer;