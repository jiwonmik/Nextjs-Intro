import { getMovies } from '@/api/movies';
import Seo from '@/components/Seo';
import { useMovies } from '@/hooks/movies';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default function Home() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <div className="container">
      <Seo title="Home"></Seo>
      {data!.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 50px;
          gap: 20px;
        }
        .movie {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
