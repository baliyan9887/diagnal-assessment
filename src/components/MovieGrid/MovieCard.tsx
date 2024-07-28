// src/components/MovieGrid/MovieCard.tsx

import React from 'react';
import { MovieCardProps } from '../../types';
import { Card, Title, Image } from '../../styles/MovieGrid';

const fallbackImage = 'https://via.placeholder.com/100x150';

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  console.log('Image URL', movie);

  return (
    <Card>
      <Image src={movie.posterImage} alt={movie.name} />
      <Title>
        {movie.name.length > 20
          ? `${movie.name.substring(0, 20)}...`
          : movie.name}
      </Title>
    </Card>
  );
};

export default MovieCard;
