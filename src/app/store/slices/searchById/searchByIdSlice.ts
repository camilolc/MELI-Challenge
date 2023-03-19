import { createSlice } from "@reduxjs/toolkit";
import { ItemJsonById } from "../../../interfaces/interfaces";

// const initialState: SearchResult[]={};

const result: ItemJsonById = {
  id: "",
  condition: "",
  description: "",
  free_shipping: false,
  picture: "",
  price: {
    amount: 0,
    currency: "",
    decimals: 0,
  },
  sold_quantity: 0,
  title: "",
};
export const searchSlicebyId = createSlice({
  name: "searchById",
  initialState: {
    author: {
      name: "Camilo",
      lastName: "Lopez",
    },
    result,
    isLoading: false,
  },
  reducers: {
    startLoadingSearch: (state /* action */) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.isLoading = false;
      state.result = action.payload.result;
    },
  },
});
export const { startLoadingSearch, setResults } = searchSlicebyId.actions;
