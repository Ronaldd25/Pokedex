import { Link } from "react-router-dom";
import { useGetPokeData } from "../../hooks/useGetPokeData";
import { usePokeStore } from "../../hooks/usePokeStore";
import { useErroStore } from "../../hooks/useErroStore";

export const Header = () => {
  const { data } = useGetPokeData();
  const { updatePokeList } = usePokeStore();
  const { setErro } = useErroStore();

  const handleClick = () => {
    setErro(null);
    updatePokeList(data);
  };

  return (
    <header className="bg-linear h-24 flex items-center justify-between pl-12 pr-4 shadow-xl xl:py-14">
      <Link onClick={handleClick} to="/">
        <img
          className="w-12 xl:w-16"
          src="./logo.png"
          alt="Imagem de uma pokedex"
        />
      </Link>
      <div className="flex  gap-1 items-center">
        <img
          className="md:w-20 xl:w-24"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/25.gif"
          alt="GIF do pikachu"
        />
        <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold bg-secondary text-primary p-2 rounded-2xl">
          Pokedex
        </h1>
      </div>
    </header>
  );
};
