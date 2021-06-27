import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mailApi = createApi({
  reducerPath: "mailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/58770279-0738-4578-a1cf-c56a193fce98" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getMails: builder.query({
      query: () => ``,
    }),
  }),
});

export const { useGetMailsQuery } = mailApi;
