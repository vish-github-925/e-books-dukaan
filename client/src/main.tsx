import "./index.css";

// importing React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";

// importing third-party packages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// importing components and pages
import HomePage from "./HomePage";
import Navbar from "./components/Layout/Navbar";
import CategoriesPage from "./pages/CategoriesPage";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import LogoutPage from "./pages/LogoutPage";
import BookById from "./pages/BookById";
import CartContextProvider from "./context/CartContextProvider";

// importing loaders and actions
import { loader as homeLoader } from "./HomePage";
import { loader as categoriesLoader } from "./pages/CategoriesPage";
import { loader as bookByIdLoader } from "./pages/BookById";
import { action as loginPageAction } from "./pages/AuthPage";
import HomeErrorPage from "./pages/HomeErrorPage";
import UserContextProvider from "./context/UserContextProvider";

// react-query -- queryClient
export const queryClient = new QueryClient();

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
        errorElement: <HomeErrorPage />,
      },
      {
        path: "category/:categoryName",
        element: <CategoriesPage />,
        loader: categoriesLoader,
      },
      {
        path: "book/:category/:id",
        element: <BookById />,
        loader: bookByIdLoader,
      },
      {
        path: "login",
        element: <AuthPage />,
        action: loginPageAction,
      },
      {
        path: "logout",
        element: <LogoutPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <RouterProvider router={browserRouter} />
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
