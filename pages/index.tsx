import Seo from '@/components/Seo';
import { useQuery } from 'react-query';

const API_KEY = '119b01bec93b136b74081bf4b13e43cc';

interface IGetMoviesProps {
  page: number;
  results: IMovieProps[];
  total_pages: number;
  total_results: number;
}

interface IMovieProps {
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

function getMovies() {
  return fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`).then((response) =>
    response.json()
  );
}

export default function Home() {
  const { data, isLoading } = useQuery<IGetMoviesProps>(['movies', 'popular'], getMovies);
  console.log(isLoading);
  return (
    <div>
      <Seo title="Home"></Seo>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        data?.results.map((movie) => (
          <div key={movie.id}>
            <h4>{movie.original_title}</h4>
          </div>
        ))
      )}
    </div>
  );
}
