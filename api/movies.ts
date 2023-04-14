export const getMovies = async () => {
  const { results } = await (await fetch('/api/movies')).json();
  console.log(`popular movies fetched`);
  return results;
};
