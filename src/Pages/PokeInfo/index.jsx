import { useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "../../styles/backgrounds.css";

export const PokePage = () => {
  let { id } = useParams();
  let pokeType;
  const [poke, setPoke] = useState(null);
  const [swipe, setSwipe] = useState(id);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${swipe}`)
      .then((res) => res.json())
      .then((res) => setPoke(res));
  }, [swipe]);

  if (poke) {
    pokeType = poke.types.map((dado) => dado.type.name);
  }

  return (
    poke && (
      <section className={`h-screen pt-8 ${pokeType[0]} flex flex-col`}>
        <div className="grid grid-cols-[1fr_1fr] md:flex md:self-center gap-x-12 pl-4">
          <h2 className="text-4xl btn-primary text-center md:w-80">
            {poke.name.toUpperCase()}
          </h2>
          <span className="btn-primary text-nowrap justify-self-center self-center">
            ID: {poke.id}
          </span>
        </div>

        <div
          className={`flex justify-between md:justify-around items-center mx-4`}
        >
          <button
            disabled={swipe == 1}
            className="btn-primary text-3xl disabled:bg-gray-600"
            onClick={() => {
              setSwipe((prev) => Math.abs(Number(prev) - 1));
            }}
          >
            <FaArrowLeftLong />
          </button>
          <img
            src={poke.sprites.other.home.front_default}
            alt={`imagem do pokemon ${poke.name}`}
            className="max-w-80 m-0"
          />
          <button
            disabled={swipe == 151}
            className="btn-primary text-3xl disabled:bg-gray-600"
            onClick={() => {
              setSwipe((prev) => Number(prev) + 1);
            }}
          >
            <FaArrowRight />
          </button>
        </div>

        <div className="btn-primary mt-8 text-2xl text-center w-2/4 self-center">
          <span>
            {pokeType[1] ? "Tipos: " : "Tipo: "}
            {pokeType[1] ? pokeType.join(" | ") : pokeType}
          </span>
        </div>
      </section>
    )
  );
};
