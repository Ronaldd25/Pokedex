import { Button } from "../Button";
import { IoMdClose } from "react-icons/io";
import { useGetPokeData } from "../../hooks/useGetPokeData";
import { usePokeStore } from "../../hooks/usePokeStore";
import { useGetPokeTypes } from "../../hooks/useGetPokeTypes";

export const Modal = ({ setIsOpen }) => {
  const { data } = useGetPokeData();
  const { updatePokeList } = usePokeStore();
  const types = useGetPokeTypes();
  let typesToShow;

  const excludedTypes = ["unknown", "shadow", "dark", "stellar"];

  if (types.data) {
    typesToShow = types.data.filter(
      (type) => !excludedTypes.includes(type.name)
    );
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const pokeFilter = async (e) => {
    const { type } = e.target.dataset;

    const promises = data.map((poke) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`).then((res) =>
        res.json()
      )
    );

    const results = await Promise.all(promises);

    const filteredPokeList = results.filter((pokeData) => {
      const types = pokeData.types.map((t) => t.type.name);
      return types.includes(type);
    });

    updatePokeList(filteredPokeList);
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center ">
      <div className="bg-primary p-6 rounded shadow-lg w-4/5 relative">
        <div className="mb-4">
          <h3 className="text-2xl font-bold">Filtrar por tipo</h3>
          <div className="absolute right-[-0.5rem] top-[-.5rem]">
            <Button onClick={closeModal}>{<IoMdClose />}</Button>
          </div>
        </div>
        <div>
          <ul className="grid grid-cols-3 gap-4">
            {typesToShow &&
              typesToShow.map((type) => {
                return (
                  <li
                    key={type.name}
                    onClick={pokeFilter}
                    className={`${type.name} p-2 rounded-2xl border-2 border-black shadow-lg font-semibold text-lg text-center cursor-pointer`}
                    data-type={type.name}
                    value={type.name}
                  >
                    {type.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
