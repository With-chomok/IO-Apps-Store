import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import useCardHook from "../components/hooks/useCardHook";
import HomeCardDisplay from "./HomeCardDisplay";
import LoadingSpin from "../components/Loading/LoadingSpin";

const Apps = () => {
  const { data, loading } = useCardHook();
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const searchResult = search.trim().toLocaleLowerCase();

  const searchApps = searchResult
    ? data.filter((singleData) =>
        singleData?.title?.toLocaleLowerCase().includes(searchResult)
      )
    : data;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <LoadingSpin count={8} />
      </div>
    );
  }

  return (
    <div>
      <div className="md:m-20 m-17">
        <div className="text-center mt-10 mb-5">
          <h1 className="text-[#001931] text-4xl md:text-[48px] font-bold mb-2">
            Our All Applications
          </h1>
          <p className="text-base text-[#627382]  ">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="md:flex  items-center justify-between mt-15 ">
            <h3 className="text-xl md:text-2xl font-bold text-[#001931] mb-5 md:mb-0 ml-5">
              ({searchApps.length}) Apps Found
            </h3>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                onChange={(e) => {
                  setSearchLoading(true);
                  setSearch(e.target.value);
                  setTimeout(() => setSearchLoading(false), 500);
                }}
                type="search"
                required
                placeholder="Search Apps"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center">
            {searchLoading ? (
              <div className="col-span-full flex justify-center items-center min-h-[200px]">
                <LoadingSpin count={4} />
              </div>
            ) : searchApps && searchApps.length > 0 ? (
              searchApps.map((data) => (
                <HomeCardDisplay key={data.id} data={data} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 font-bold text-4xl mt-10">
                No App Found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
