import { useQuery } from '@tanstack/react-query'

const getPokeData = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  );
  const data = await res.json();

  return data.results;
};

export const useGetPokeData = () => {
  const query = useQuery({
    queryKey: ['getPokeData'],
    queryFn: getPokeData
  })

  return query
}