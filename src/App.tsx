import "@website/styles/globals.css";

import { Layout } from "@website/components/Layout.tsx";
import { About } from "@website/pages/About.tsx";
import { Home } from "@website/pages/Home.tsx";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/about"} element={<About/>}/>
    </Route>,
  ),
);

export const App = () => {
  return (
    <RouterProvider router={router}/>
  );
};
