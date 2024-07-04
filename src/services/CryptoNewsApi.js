import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
     'X-BingApis-SDK': 'true',
	 'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com' ,
	 'x-rapidapi-key': '96e39733a2msh93534f6f5999c59p1add5ajsna4a5be1db2e8',
};//'KJwZZIJSFilmshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA'

const baseUrl = "https://bing-news-search1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;

