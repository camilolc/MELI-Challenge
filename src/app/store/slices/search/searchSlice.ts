import { createSlice } from "@reduxjs/toolkit";
import { ItemJson } from "../../../interfaces/interfaces";

// const initialState: SearchResult[]={};

let results: ItemJson[] = [];
export const searchSlice = createSlice({
  name: "search",
  initialState: {
    author: {},
    results,
    isLoading: false,
  },
  reducers: {
    startLoadingSearch: (state /* action */) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.author = action.payload.author;
      state.results = action.payload.results;
      state.isLoading = false;
    },
  },
});
export const { startLoadingSearch, setResults } = searchSlice.actions;
