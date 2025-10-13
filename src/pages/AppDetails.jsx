import React from "react";
import { Link, useParams } from "react-router";
import useCardHook from "../components/hooks/useCardHook";
import BarChart from "../components/Rechart/BarChart";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useCardHook();
  const singleData = data.find((p) => String(p.id) === id);

  if (loading) return <p>loading.....</p>;
  const {
    image,
    title,
    description,
    reviews,
    downloads,
    ratingAvg,
    size,
    ratings,
  } = singleData;

  const rate = ratings.map((rate) => rate);
  

  return (
    <>
      <div className="md:flex  justify-start gap-10 items-center m-20">
        <div className="md:w-[400px]">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="space-y-8 w-full flex flex-col items-start justify-start">
          <div >
            <h1 className="text-[#001931] font-bold text-3xl mt-5 md:mt-0 mb-2">{title}</h1>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                productive.io
              </span>{" "}
            </p>
          </div>
            <div className="border-b border-b-gray-300 w-full"></div>

          <div className="md:flex items-start justify-around md:gap-15">
            <div className="space-y-2 mb-10 md:mb-0">
              <i className="fa-solid fa-download  bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent"></i>
              <p className="text-base text-[#001931]">Downloads</p>
              <h1 className="font-extrabold text-4xl text-[#001931] mb-3">
                {downloads}
              </h1>
            </div>
            <div className="space-y-2 mb-10 md:mb-0 ">
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
            <Link
              rel="noopener noreferrer"
              className="btn bg-[#00D390] text-white hover:scale-105 transition-all">
              <i className="fa-solid fa-circle-down"></i> Install Now ({size} MB)
            </Link>
          </div>
        </div>
      </div>
      <div className="m-20"> 
          <BarChart rate={rate}></BarChart>
      </div>

      <div className="m-20">

        {" "}
        <h1 className="font-semibold text-[#001931] text-2xl mb-6">Description</h1>
        <p>
            {description}
          </p>
      </div>
    </>
  );
};

export default ProductDetails;
