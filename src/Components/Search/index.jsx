import { useEffect, useRef, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { usePokeStore } from "../../hooks/usePokeStore";
import { PokeNotFound } from "../PokeNotFound";
import { Loading } from "../Loading";
import { useGetPokeData } from "../../hooks/useGetPokeData";
import { useErroStore } from "../../hooks/useErroStore";
import { Button } from "../Button";

export const Search = () => {
  const [value, setValue] = useState(null);
  const { pokeList, updatePokeList } = usePokeStore();
  const pokeListCopy = useRef(null);
  const { data } = useGetPokeData();
  const { setErro } = useErroStore();

  useEffect(() => {
    if (pokeList && !pokeList[0]) {
      setErro(
        <p className="text-rose-600 font-bold text-2xl text-center mt-8 md:text-4xl">
          Não há pokemons com esse nome
        </p>
      );
    }
  }, [pokeList]);

  useEffect(() => {
    setErro(null);

    if (value) {
      updatePokeList(
        pokeListCopy.current.filter((pokemon) =>
          pokemon.name.includes(value.toLowerCase())
        )
      );
    } else {
      updatePokeList(pokeListCopy.current);
    }
  }, [value]);

  pokeListCopy.current = data;

  const handleOnChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro(<Loading />);
    if (!value) {
      setErro(
        <div className="text-red-600 text-2xl text-center mt-4 font-bold md:text-4xl">
          Campo em branco, digite algo
        </div>
      );
      return;
    }

    fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then((res) => {
        setErro(null);
        updatePokeList([res]);
      })
      .catch((erro) => setErro(<PokeNotFound erro={erro} setErro={setErro} />));
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        onChange={handleOnChange}
        type="search"
        className="outline-none rounded-lg md:w-72 xl:w-2/4"
        placeholder="Pesquisar nome"
      />
      <Button>
        <TfiSearch />
      </Button>
    </form>
  );
};
