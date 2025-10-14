import React, { useEffect, useState } from "react";
import DisplayInstallCard from "../components/Display/DisplayInstallCard";
import SortingCard from "../components/sorting/SortingCard";
import toast from "react-hot-toast";

const InstalledApps = () => {
    
  const [installApps, setInstallApps] = useState([]);
  const [order, setOrder] = useState("none");

  const sortedItem = () => {
    if (order === "dowloads-desc") {
      return [...installApps].sort((a, b) => b.size - a.size);
    } else if (order === "dowloads-asc") {
      return [...installApps].sort((a, b) => a.size - b.size);
    } else {
      return installApps;
    }
  };

  const handleRemove = id => {
    const installationList =
      JSON.parse(localStorage.getItem("installation")) || [];
    let updatedList = installationList.filter(p => p.id !== id)
     
    setInstallApps(updatedList)
    toast.success(` Uninstall successfully! 😓🥺`);
    localStorage.setItem("installation", JSON.stringify(updatedList));
  };

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("installation")) || [];
    if (savedList) setInstallApps(savedList);
  }, []);
  return (
    <div className="md:m-20 m-5 ">
      <div className=" mt-10 mb-5">
        <div className="text-center ">
          <h1 className="text-[#001931] text-4xl md:text-[44px] font-bold mb-6">
            Your Installed Apps
          </h1>
          <p className="md:text-base text-sm text-[#627382] mx-10 ">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="flex items-center justify-between mt-15 m-7">
          <h3 className="text-xl md:text-2xl font-bold text-[#001931]  md:mb-0 ">
            {installApps.length} Apps Found
          </h3>
          <SortingCard  order={order} setOrder={setOrder}></SortingCard>
        </div>

        {sortedItem().map((p) => (
          <DisplayInstallCard handleRemove={handleRemove} p={p}></DisplayInstallCard>
        ))}
      </div>
    </div>
  );
};

export default InstalledApps;
