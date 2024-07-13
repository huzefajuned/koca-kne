import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import "./index.css";
import Team from "./components/Team";
import Themes from "./components/Themes";
import { Toaster } from "react-hot-toast";
import Events from "./components/Events";
import Profile from "./components/Profile";
import { AuthContextProvider } from "./context/AuthContext";
import Gallery from "./components/Gallery";

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
        path: "about",
        element: <About />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "themes",
        element: <Themes />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "*",
        element: <h1>Error 404 - Page Not Found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </AuthContextProvider>
  </React.StrictMode>
);
