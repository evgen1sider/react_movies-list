import React from 'react';
import './MoviesList.scss';

import { MovieCard } from '../MovieCard';

interface Movie {
  title: string,
  description: string,
  imgUrl: string,
  imdbUrl: string,
  imdbId: string,
}

type Props = {
  movies: Movie[];
};

export const MoviesList: React.FC<Props> = ({ movies }) => (
  <div className="movies">
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbId}>
          <MovieCard {...movie} />
        </li>
      ))}
    </ul>
  </div>
);
