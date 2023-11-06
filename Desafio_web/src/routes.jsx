import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  Navigate,
} from "react-router-dom";
import AppLayout from "./AppLayout/AppLayout";
import { Login, Home, Cadastro } from "./Pages";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AppLayout />} />
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="cadastro" element={<Cadastro />} />
    </Route>
  )
);
export default function Routes() {
  return <RouterProvider router={router} />;
}
