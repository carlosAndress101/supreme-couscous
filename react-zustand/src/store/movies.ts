import { create } from "zustand";
import axios from "axios";

const movieUrl = "https://api.themoviedb.org/3"
const api_key = "a09f4ea97450bccc71da0bf0d21e4128" 
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a09f4ea97450bccc71da0bf0d21e4128';

interface Movie {
  id?: number;
  title?: string;
  backdrop_path: string;
}

interface StateMovie {
  movies: Movie[];
  error: string | null;
  fetchMovies: () => Promise<void>;
  fetchMoviesG: (id: number) => Promise<void>;
}

export const useMovieStore = create<StateMovie>((set) => ({
  movies: [],
  error: null,
  fetchMovies: async () => {
    try {
      const response = await axios.get(`${movieUrl}/trending/movie/day?api_key=${api_key}`);
      set({ movies: response.data.results, error: null }); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      set({ movies: [], error: Error.name }); 
    }
  },
  fetchMoviesG: async (id) => {
    try {
      const response = await axios.get(movieByGenreBaseURL+"&with_genres="+id);
      set({ movies: response.data.results, error: null }); 
    } catch (error) {
      console.error('Error fetching movies:', error);
      set({ movies: [], error: Error.name }); 
    }
  },
}));
