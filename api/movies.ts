import axios from '@/lib/axios';

const API_KEY = process.env.API_KEY;

export const getMovies = async () => {
  const { data } = await axios.get(`/popular?api_key=${API_KEY}`);
  console.log(`popular movies fetched`);
  return data;
};
