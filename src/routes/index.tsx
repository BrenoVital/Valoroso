import { Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import MainLayout from "../shared/layouts/MainLayout";
import Agent from "../pages/Agent";
import Maps from "../pages/Maps";
import Home from "../pages/Home";
import Elos from "../pages/Elos";
import Weapons from "../pages/Weapons";
import CardsAgents from "../pages/CardsAgents";

export default function AppRoutes() {
  const routes = useMemo(() => {
    return [
      {
        label: "Página Inicial",
        path: "/",
        element: <Home />,
      },
      {
        label: "Agentes",
        path: "/agentes",
        element: <Agent />,
      },
      {
        label: "Mapas",
        path: "/mapas",
        element: <Maps />,
      },
      {
        label: "Elos Rankeds",
        path: "/elos",
        element: <Elos />,
      },
      {
        label: "Armas",
        path: "/armas",
        element: <Weapons />,
      },
      {
        label: "Cards Agentes",
        path: "/cards-agentes",
        element: <CardsAgents />,
      },
    ];
  }, []);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
