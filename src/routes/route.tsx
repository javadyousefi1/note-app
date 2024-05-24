import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import HomePage from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
