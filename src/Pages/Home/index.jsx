/* eslint-disable react/prop-types */
import { Header } from "../../Components/Header";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
