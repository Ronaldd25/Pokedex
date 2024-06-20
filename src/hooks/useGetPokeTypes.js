import { useQuery } from '@tanstack/react-query'

const getPokeTypes = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/type"
  );
  const data = await res.json();

  return data.results;
};

export const useGetPokeTypes = () => {
  const query = useQuery({
    queryKey: ['getPokeTypes'],
    queryFn: getPokeTypes
  })

  return query
}