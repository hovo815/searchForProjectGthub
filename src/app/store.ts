import { configureStore } from '@reduxjs/toolkit';
import { searchSlice } from '../services/slices/searchSlice';

export const store = configureStore({
  reducer: {
    searchUserRepo: searchSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
