import { createBrowserRouter, Route } from "react-router";
import App from "../App";
import Navbar from "../components/navbar/Navbar";
import Product from "../pages/Product";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import InstalledApps from "../pages/InstalledApps";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import LoadingSpin from "../components/Loading/LoadingSpin";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    
    children: [
      {
        index: true,
        hydrateFallbackElement: <LoadingSpin/>,
        Component: Home,
      },
      {
        path: "/home",

        Component: Home,
      },
      {
        path: "/products",
        Component: Product,
      },
      {
        path: "/apps",
        
        Component: Apps,
      },
      {
        path: "/installation",
        
        Component: InstalledApps,
      },
      {
        path: "/appDetails/:id",
        Component: AppDetails,
      },
      {
        path: '*',
        Component:ErrorPage
      }
    
    ],
  },
]);
export default router;
