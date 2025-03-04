import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  //Admin
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App></App>,
    // children: adminPaths,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App></App>,
    children: adminRoutes,
  },
  // Login and Register
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
