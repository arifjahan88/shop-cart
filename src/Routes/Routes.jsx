import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import { Main } from "../Components/Layout/Main";
import AllProducts from "../Components/All Products/AllProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
    ],
  },
]);
