import { createBrowserRouter } from "react-router";
import App from "./App";
import Layout from "./layout/Layout";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
]);
