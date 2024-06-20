import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="">
      <h3 className="text-4xl font-bold text-center my-12">
        Pagina não encontrada
      </h3>
      <div className="flex items-center justify-center">
        <span className="text-9xl font-medium mr-[-1rem]">4</span>
        <img
          className="w-32"
          src="/pokeball.png"
          alt="imagem de uma pokebola"
        />
        <span className="text-9xl font-medium ml-[-1rem]">4</span>
      </div>

      <div className="text-center mt-20">
        <Link className="btn-primary p-4" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};
