//Redux
import { configureStore } from "@reduxjs/toolkit";
//Slices
import { searchSlice } from "./slices/search/searchSlice";
import { searchSlicebyId } from "./slices/searchById/searchByIdSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
    searchById: searchSlicebyId.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
