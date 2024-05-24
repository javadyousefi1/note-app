import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
