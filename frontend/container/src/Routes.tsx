import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";
import { federationRoutes } from "authentication/Routes";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "authentication",
        children: federationRoutes,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
