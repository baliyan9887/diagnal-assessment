// src/components/MovieGrid/MovieGrid.tsx

import React, { useContext } from 'react';
import { MovieContext } from '../../context/MovieContext';
import MovieCard from './MovieCard';
import { GridContainer } from '../../styles/MovieGrid';

const MovieGrid: React.FC = () => {
  const { movies, observerRef } = useContext(MovieContext);

  return (
    <GridContainer>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
      <div ref={observerRef} style={{ height: '20px' }} />
    </GridContainer>
  );
};

export default MovieGrid;
