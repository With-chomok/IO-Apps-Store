import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useCardHook from "../components/hooks/useCardHook";
import BarChart from "../components/Rechart/BarChart";
import toast from "react-hot-toast";
import ErrorPage from "./ErrorPage";
import ErrorApp from "./ErrorApp";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useCardHook();
  const [installed, setInstalled] = useState(false);

  const singleData = data.find((p) => String(p.id) === id);

  useEffect(() => {
    if (!singleData) return;
    const installationList =
      JSON.parse(localStorage.getItem("installation")) || [];
    const alreadyInstalled = installationList.some(
      (p) => Number(p.id) === Number(singleData.id)
    );
    setInstalled(alreadyInstalled);
  }, [singleData]);


  if (loading) return <p>Loading.....</p>;
  if (!singleData) return <ErrorApp/>;

  const {
    image,
    title,
    companyName,
    description,
    reviews,
    downloads, 
    ratingAvg,
    size,
    ratings,
  } = singleData;

  const handleInstall = () => {
    const installationList =
      JSON.parse(localStorage.getItem("installation")) || [];
    const isDuplicate = installationList.some(
      (p) => Number(p.id) === Number(singleData.id)
    );

    if (isDuplicate) {
      toast.error("Already installed! ❌❌");
      return;
    }

    const updatedList = [...installationList, singleData];
    localStorage.setItem("installation", JSON.stringify(updatedList));
    setInstalled(true);
    toast.success(`${title} installed successfully! 😌🥳`);
  };

  return (
    <>
      <div className="md:flex justify-start gap-10 items-center md:m-20 m-10">
        <div className="md:w-[400px]">
          <img src={image} alt="App" className="rounded-xl" />
        </div>

        <div className="space-y-8 w-full flex flex-col items-start justify-start">
          <div>
            <h1 className="text-[#001931] font-bold text-3xl mt-5 md:mt-0 mb-2">
              {title}
            </h1>
            <p className="text-[#627382]">
              
              <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>

          <div className="border-b border-b-gray-300 w-full"></div>

          <div className="md:flex items-start justify-around md:gap-15">
            <div className="space-y-2 mb-10 md:mb-0">
              <i className="fa-solid fa-download bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent"></i>
              <p className="text-base text-[#001931]">Downloads</p>
              <h1 className="font-extrabold text-4xl text-[#001931] mb-3">
                {downloads}
              </h1>
            </div>

            <div className="space-y-2 mb-10 md:mb-0">
              <i className="fa-solid fa-star text-[#FF8811]"></i>
              <p className="text-base text-[#001931]">Average Ratings</p>
              <h1 className="font-extrabold text-4xl text-[#001931]">
                {ratingAvg}
              </h1>
            </div>

            <div className="space-y-2 mb-10 md:mb-0">
              <i className="fa-solid fa-thumbs-up bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"></i>
              <p className="text-base text-[#001931]">Total Reviews</p>
              <h1 className="font-extrabold text-4xl text-[#001931]">
                {reviews}
              </h1>
            </div>
          </div>

          <div>
            <button
              disabled={installed}
              onClick={handleInstall}
              className={`btn ${
                installed ? "bg-gray-400" : "bg-[#00D390]"
              } text-white hover:scale-105 transition-all`}>
              <i className="fa-solid fa-circle-down"></i>{" "}
              {installed ? "Installed ✓" : "Install"} Now ({size} MB)
            </button>
          </div>
        </div>
      </div>

      <div className="md:m-20 m-10">
        <BarChart ratings={ratings} />
      </div>

      <div className="md:m-20 m-10">
        <h1 className="font-semibold text-[#001931] text-2xl mb-6">
          Description
        </h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default ProductDetails;
