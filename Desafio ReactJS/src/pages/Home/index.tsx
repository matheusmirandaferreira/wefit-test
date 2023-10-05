import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

import { Loader } from '../../components/Loader';
import { MovieCard } from '../../components/MovieCard';
import { PageWrapper } from '../../components/PageWrapper';

import { MovieProps } from '../../types/movie';

import * as S from './styles';

type MoviesResponse = {
  products: MovieProps[];
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState('');
  const [data, setData] = useState<MovieProps[]>([]);

  const loadMovies = useCallback(async () => {
    setError('');
    setIsLoading(true);
    try {
      const response = await axios.get<MoviesResponse>('../../../server.json');

      setData(response.data.products);
    } catch (err) {
      setError('Ocorreu um erro ao carregar seus dados.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve(loadMovies());
  }, [loadMovies]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <PageWrapper>
      <S.CardsWrapper>
        {data.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </S.CardsWrapper>
    </PageWrapper>
  );
}
