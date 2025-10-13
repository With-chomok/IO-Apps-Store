import { createBrowserRouter } from "react-router";
import App from "../App";
import Navbar from "../components/navbar/Navbar";
import Product from "../pages/Product";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import InstalledApps from "../pages/InstalledApps";
import Apps from "../pages/Apps";
import AppDetails from '../pages/AppDetails'
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage/>,
    
    children: [
      
        {
          index:true,
          hydrateFallbackElement: <div>Loading server data...</div>,
          loader:() => fetch('TrendingAppData.json'),
          Component: Home
        },
        {
          path:'/home',
          
          loader:() => fetch('TrendingAppData.json'),
          Component: Home
        },
        {
        
          path: "/products",
          Component: Product
          
        },
        {
          path: '/apps',
          Component: Apps
        },
        {
          path: '/installation',
          Component: InstalledApps
        },
        {
          path: '/appDetails/:id',
          element: <AppDetails></AppDetails>
        }
    ]
  },
]);
export default router