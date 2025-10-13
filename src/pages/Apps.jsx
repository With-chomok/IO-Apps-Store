import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import useCardHook from "../components/hooks/useCardHook";
import HomeCardDisplay from "../components/loddinSpin/HomeCardDisplay";

const Apps = () => {
  const { data } = useCardHook();
  const [search, setSearch] = useState("");
  const searchResult = search.trim().toLocaleLowerCase();

  const searchApps = searchResult
    ? data.filter((singleData) =>
        singleData?.title?.toLocaleLowerCase().includes(searchResult)
      )
    : data;


  return (
    <div>
      <div className="m-20">
        <div className="text-center mt-10 mb-5">
          <h1 className="text-[#001931] text-[48px] font-bold mb-2">
            Our All Applications
          </h1>
          <p className="text-base text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
          <div className="flex items-center justify-between mt-15 ">
            <h3 className="text-2xl  font-bold text-[#001931]  ml-5">
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
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search Apps"
              />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center">
            {searchApps.map((data) => (
              <HomeCardDisplay key={data.id} data={data}></HomeCardDisplay>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
