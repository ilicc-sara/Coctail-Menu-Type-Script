import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import SharedLayout from "./layouts/SharedLayout.tsx";
import Home from "./pages/home/Index.tsx";
import SingleCoctail from "./pages/SingleCoctail.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleCoctail/:coctailID",
        element: <SingleCoctail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
