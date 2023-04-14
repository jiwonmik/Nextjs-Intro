import { getMovies } from '@/api/movies';
import Seo from '@/components/Seo';
import { useMovies } from '@/hooks/movies';
import { QueryClient, dehydrate } from '@tanstack/react-query';

export default function Home() {
  const { data, isLoading } = useMovies();

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <div>
      <Seo title="Home"></Seo>
      {data!.results.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  // prefetch data on the server
  await queryClient.fetchQuery(['movies'], () => getMovies());

  return {
    props: {
      // dehydrate query cache
      dehydratedState: dehydrate(queryClient),
    },
  };
};
