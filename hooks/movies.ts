import { useQuery } from '@tanstack/react-query';
import { getMovies } from '@/api/movies';

export interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

export interface IMovieProps {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export const useMovies = () => {
  return useQuery<IMovieProps[]>(['movies'], () => getMovies());
};
