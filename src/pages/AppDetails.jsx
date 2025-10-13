import React from "react";
import { Link, useParams } from "react-router";
import useCardHook from "../components/hooks/useCardHook";
// {
//
//     "image": "https://i.ibb.co.com/S7rcQsx1/instrag.png",
//     "title": "Instagram",
//
//     "description": "Connect with friends, share your photos and reels, and explore the world’s moments visually.",
//
//     "reviews": "18.0M",
//
//     "downloads": "5.2B",
//     "ratings": [
//         {
//             "name": "1 star",
//             "count": 0.8
//         },
//         {
//             "name": "2 star",
//             "count": 0.5
//         },
//         {
//             "name": "3 star",
//             "count": 1.2
//         },
//         {
//             "name": "4 star",
//             "count": 4
//         },
//         {
//             "name": "5 star",
//             "count": 11.5
//         }
//     ]
// }
const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useCardHook();
  const singleData = data.find((p) => String(p.id) === id);
  console.log(singleData);
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
  console.log(rate);

  return (
    <>
      <div className="flex  justify-start gap-10 items-center m-20">
        <div className="w-[400px]">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </div>
        <div className="space-y-8 w-full flex flex-col items-start justify-start">
          <div>
            <h1 className="text-[#001931] font-bold text-3xl">{title}</h1>
            <p className="text-[#627382]">
              Developed by{" "}
              <span className="bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent">
                productive.io
              </span>{" "}
            </p>
          </div>

          <div className="flex items-start justify-around gap-15">
            <div className="space-y-2">
              <i className="fa-solid fa-download  bg-gradient-to-r from-[#54CF68] to-[#00827A] bg-clip-text text-transparent"></i>
              <p className="text-base text-[#001931]">Downloads</p>
              <h1 className="font-extrabold text-4xl text-[#001931]">
                {downloads}
              </h1>
            </div>
            <div className="space-y-2">
              <i className="fa-solid fa-star text-[#FF8811]"></i>
              <p className="text-base text-[#001931]">Average Ratings</p>
              <h1 className="font-extrabold text-4xl text-[#001931]">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-2">
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
              <i class="fa-solid fa-circle-down"></i> Install Now ({size} MB)
            </Link>
          </div>
        </div>
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
