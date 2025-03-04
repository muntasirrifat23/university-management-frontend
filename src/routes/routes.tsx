import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths,  } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  //Admin
  {
    path: "/admin",
    element: <App></App>,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    // children: adminPaths,
    // children: adminRoutes,
    children: routeGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routeGenerator(studentPaths),
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
