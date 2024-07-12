import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },

      {
        path: "/about",
        element: (
          <>
            <h1>About !</h1>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <h1>Contact !</h1>
          </>
        ),
      },
      {
        path: "*",
        element: (
          <>
            <h1>Erro 404 !</h1>
          </>
        ),
      },

      // Add more routes here if needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
