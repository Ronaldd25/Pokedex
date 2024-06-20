import { usePokeStore } from "../../hooks/usePokeStore";
import { Card } from "../Card";
import { Loading } from "../Loading";
import { useGetPokeData } from "../../hooks/useGetPokeData";
import { useEffect } from "react";
import { useErroStore } from "../../hooks/useErroStore";

export const Main = () => {
  const { pokeList, updatePokeList } = usePokeStore();
  const { data, isPending, isError, error } = useGetPokeData();
  const { erro, setErro } = useErroStore();

  useEffect(() => {
    if (data) {
      updatePokeList(data);
    }
  }, [data, updatePokeList]);

  if (isPending) return <Loading />;

  if (isError) {
    setErro(error);
  }

  return erro
    ? erro
    : pokeList && (
        <main className="mt-2 md:w-4/5 md:mt-4">
          <ul className="grid grid-cols-2 xl:grid-cols-3 gap-x-1 md:gap-x-4 gap-y-4">
            {pokeList.map((pokemon) => (
              <Card key={pokemon.name} name={pokemon.name} />
            ))}
          </ul>
        </main>
      );
};
