import { configureStore } from '@reduxjs/toolkit';
import { giphyApi } from '../services/giphyApi';

export const store = configureStore({
  reducer: {
    [giphyApi.reducerPath]: giphyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(giphyApi.middleware),
});
