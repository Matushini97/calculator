import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { routeConfig } from "./routeConfig"

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<div>Something went wrong...</div>}>
      <Route path='*' element={<div>404 Not found</div>}/>
      <Route index element={routeConfig.home.element}/>
      <Route path={routeConfig.settings.path} element={routeConfig.settings.element}/>
    </Route>
  ));