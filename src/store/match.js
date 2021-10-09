import MatchApi from "../services/MatchApi";
import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";

export const getMatchData = createAsyncThunk('match/getData', async (match) => {
  const api = new MatchApi();

  const result = await api.get(match);

  return result;
});

const initialState = {
  matchInfo: undefined,
};

const matchReducer = createReducer(initialState, (builder) => {
  builder.addCase(getMatchData.fulfilled, (state, action) => {
    state.matchInfo = action.payload;
  });
});

export default matchReducer;