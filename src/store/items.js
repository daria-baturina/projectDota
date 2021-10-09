import ItemsApi from "../services/ItemsApi";
import {createAsyncThunk, createReducer} from "@reduxjs/toolkit";


export const getItemsData = createAsyncThunk('items/getData', async () => {
  const api = new ItemsApi();
  const result = await api.get();

  return result;
});

const initialState = {
  itemsData: undefined,
};

const itemsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getItemsData.fulfilled, (state, action) => {
    state.itemsData = action.payload;
  });
});

export default itemsReducer;