import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet, useNavigation } from "react-router";
import LoadingSpin from "../components/Loading/LoadingSpin";
const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar></Navbar>
        <div className="flex-1 bg-[#f3f3f3]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
              <LoadingSpin />
            </div>
          )}
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
