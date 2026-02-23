import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/home/HomePage/HomePage";
import ProductDetails from "../pages/details/ProductDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
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