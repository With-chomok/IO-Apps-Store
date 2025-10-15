import { HashRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Apps from "../pages/Apps";
import InstalledApps from "../pages/InstalledApps";
import AppDetails from "../pages/AppDetails";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpin from "../components/Loading/LoadingSpin";

const routes = createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="products" element={<Product />} />
    <Route path="apps" element={<Apps />} />
    <Route path="installation" element={<InstalledApps />} />
    <Route path="appDetails/:id" element={<AppDetails />} />
    <Route path="*" element={<ErrorPage />} />
  </Route>
);

export default function AppRouter() {
  return (
    <HashRouter>
      <RouterProvider router={routes} fallbackElement={<LoadingSpin />} />
    </HashRouter>
  );
}