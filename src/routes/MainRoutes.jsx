import React from "react";
import Home from "../pages/Home";
import RoomDetails from "../pages/RoomDetails";
import { Route, Routes } from "react-router-dom";
import Register from "../auth/Register";

import Login from "../auth/Login";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { id: 1, link: "/", element: <Home /> },
    { id: 2, link: "/room/:id", element: <RoomDetails /> },
    { id: 3, link: "/register", element: <Register /> },
    { id: 4, link: "/login", element: <Login /> },
  ];
  return (
    <Routes>
      {PUBLIC_ROUTES.map((elem) => (
        <Route path={elem.link} key={elem.id} element={elem.element} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
