import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const giphyApi = createApi({
  reducerPath: 'giphyApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_GIPHY_API_ENDPOINT }),
  endpoints: (builder) => ({
    getGifsByText: builder.query({
      query: ({ searchTerm, language }) => ({
        url: '',
        params: {
          q: searchTerm,
          limit: 10,
          api_key: import.meta.env.VITE_GIPHY_API_KEY,
          lang: language,
        },
      }),
    
    }),
  }),
});

export const { useGetGifsByTextQuery } = giphyApi;
