// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
	reducerPath: "movieApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://www.omdbapi.com" }),
	endpoints: (builder) => ({
		getMovies: builder.query({
			query: ({ search, page, type, year }) =>
				`/?apikey=1b05d471&s=${search ? search : ""}&page=${page}${year ? "&y=" + year : ""}${
					type ? "&type=" + type : ""
				}`,
		}),
		getMovieDetail: builder.query({
			query: (name) => `/?apikey=1b05d471&i=${name}`,
		}),
	}),
});

export const { useGetMoviesQuery, useGetMovieDetailQuery } = movieApi;
