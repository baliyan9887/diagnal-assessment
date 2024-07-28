// src/context/MovieContext.tsx

import React, { createContext, useState, useMemo, ReactNode } from 'react';
import { useMovies } from '../hooks/useMovies';
import { Movie, MovieContextProps } from '../types';

export const MovieContext = createContext<MovieContextProps>({
  movies: [],
  searchQuery: '',
  setSearchQuery: () => {},
  observerRef: { current: null },
});

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { movies, observerRef } = useMovies();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [movies, searchQuery]
  );

  return (
    <MovieContext.Provider
      value={{
        movies: filteredMovies,
        searchQuery,
        setSearchQuery,
        observerRef,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
