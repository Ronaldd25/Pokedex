import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { HomeContainer } from "./Components/HomeContainer";
import { PokePage } from "./Pages/PokeInfo";
import { NotFound } from "./Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "*",
        element: <NotFound />,
      },
      {
        index: true,
        element: <HomeContainer />,
      },
      {
        path: "pokemon/:id",
        element: <PokePage />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
