import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <Layout />, //
    children: [
      { path: "/", element: <Home /> },
      { path: "/properties/:id", element: <Property /> },
      { path: "/about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
