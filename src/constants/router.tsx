import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "../components/Layout/Layout"
import { routeConfig } from "./routeConfig"

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<div>Something went wrong...</div>}>
      <Route path='*' element={<div>Page not found</div>} />
      {Object.values(routeConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
        />
      ))}
    </Route>
  ));