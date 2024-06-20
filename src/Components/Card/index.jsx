/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ name }) => {
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((res) => setPoke(res));
  }, [name]);

  return (
    poke && (
      <li className="bg-yellow-300 rounded-lg  grid grid-cols-3 hover:bg-yellow-400   justify-center items-center pb-2 shadow-lg">
        <img
          className="max-w-32 md:max-w-40 col-start-1 col-end-3 md:col-span-2"
          src={poke.sprites.other["official-artwork"]["front_default"]}
          alt={`Imagem do pokemon ${poke.name}`}
        />
        <span className="flex items-center self-start mt-2 justify-self-center btn-primary text-center w-10 h-10 rounded-full">
          Id: {poke.id}
        </span>

        <h2 className="pl-4 text-xl md:text-3xl font-semibold text-slate-800 font-mono first-letter:uppercase">
          {poke.name}
        </h2>

        <div className="btn-primary text-xs text-center w-16 col-start-3 md:justify-self-center md:text-base whitespace-nowrap md:w-20 ">
          <Link to={`/pokemon/${poke.id}`}>Ver mais</Link>
        </div>
      </li>
    )
  );
};
