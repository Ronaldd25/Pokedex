import { ImSortAlphaAsc } from "react-icons/im";
import { ImSortAlphaDesc } from "react-icons/im";
import { usePokeStore } from "../../hooks/usePokeStore";
import { Button } from "../Button";

export const Sort = () => {
  const { pokeList, updatePokeList } = usePokeStore();

  function ordenarPokeList(direcao) {
    const arrayOrdenado = pokeList.sort((a, b) => {
      return direcao === "crescente"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

    updatePokeList(arrayOrdenado);
  }

  return (
    <div className="justify-self-end flex gap-2">
      <Button
        onClick={() => {
          ordenarPokeList("crescente");
        }}
      >
        <ImSortAlphaAsc />
      </Button>
      <Button
        onClick={() => {
          ordenarPokeList("decrescente");
        }}
      >
        <ImSortAlphaDesc />
      </Button>
    </div>
  );
};
