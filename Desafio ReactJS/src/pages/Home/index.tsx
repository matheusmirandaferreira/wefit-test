import { useCallback, useEffect, useState } from 'react';
import { Loader } from '../../components/Loader';
import { MovieProps } from '../../types/movie';
import axios from 'axios';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [data, setData] = useState<MovieProps[]>([]);

  const loadMovies = useCallback(async () => {
    try {
      const response = await axios.get<MovieProps[]>('../../../server.json');
      console.log('response', response);

      setData(response.data);
    } catch (err) {
      console.log(err);
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

  return <>{JSON.stringify(data)}</>;
}
