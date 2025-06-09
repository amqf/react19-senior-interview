import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
