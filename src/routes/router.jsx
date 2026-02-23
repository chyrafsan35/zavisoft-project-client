import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/home/HomePage/HomePage";
import ProductDetails from "../pages/details/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: HomePage
        },
        {
          path: '/details/:id',
          Component: ProductDetails
        }
    ]
  },
]);