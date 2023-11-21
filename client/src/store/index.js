import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';
import auctionsReducer from '../reducer/auctionSlice';

export default configureStore({
  reducer: {
    auctionsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
