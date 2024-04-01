import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/detail/:id",
          element: <Detail />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/checkout",
          element: <Checkout />
        },
      ]
    },
  ])