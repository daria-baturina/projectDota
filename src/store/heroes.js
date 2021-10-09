import HeroesApi from "../services/HeroesApi";
import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";


export const getHeroesData = createAsyncThunk('heroes/getData', async () => {
  const api = new HeroesApi();
  const result = await api.get();

  return result;
});

const initialState = {
  heroesData: undefined,
};

const heroesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getHeroesData.pending, (state, action) => {
    state.heroesData = undefined;
  });
  builder.addCase(getHeroesData.fulfilled, (state, action) => {
    state.heroesData = action.payload;
  });
});

export default heroesReducer;