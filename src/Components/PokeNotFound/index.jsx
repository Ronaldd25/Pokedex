/* eslint-disable react/prop-types */

import { useGetPokeData } from "../../hooks/useGetPokeData";
import { usePokeStore } from "../../hooks/usePokeStore";

export const PokeNotFound = ({ erro, setErro }) => {
  const { data } = useGetPokeData();
  const { updatePokeList } = usePokeStore();

  const handleClick = () => {
    setErro(null);
    updatePokeList(data);
  };

  return (
    <div className="bg-primary h-screen mt-2  pt-4 flex flex-col items-center md:w-4/5">
      <h2 className=" text-3xl font-bold text-secondary">
        Pokemon não encontrado
      </h2>
      <img
        className="w-60 mb-8"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png"
        alt="GIF do pokemon psyduck"
      />
      <p className="text-2xl font-semibold">
        Erro: <span className="text-secondary font-bold">{erro.message}</span>
        {erro.message == 404 && " - Pokemon não encontrado"}
      </p>
      <button
        onClick={handleClick}
        className="btn-primary py-2 px-4 mt-8 text-2xl"
      >
        Voltar
      </button>
    </div>
  );
};
