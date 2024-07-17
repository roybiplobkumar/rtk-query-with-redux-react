
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const createWeatherApi =createApi( {
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl : "https://wttr.in/" }),
  endpoints: (builder) => ({
    getWeatherCity: builder.query({
      query: (city) =>`${city}?format=j1`,
    }),
  }),
});

export const { useGetWeatherCityQuery } = createWeatherApi;
export default createWeatherApi;
