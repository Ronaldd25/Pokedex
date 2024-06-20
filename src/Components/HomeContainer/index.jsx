import { Search } from "../Search";
import { Filter } from "../Filter";
import { Sort } from "../Sort";
import { Main } from "../Main";

export const HomeContainer = () => {
  return (
    <section className="mx-2 my-4 md:flex md:flex-col md:items-center">
      <div className="bg-primary grid grid-cols-[75%_min-content_1fr] p-2 md:w-4/5 md:text-2xl">
        <Search />
        <Filter />
        <Sort />
      </div>
      <Main />
    </section>
  );
};
