import React from "react";
import Hero from "../assets/hero.png";
const Home = () => {
  return (
    <>
    <div className="space-y-10 mt-20 mx-5 md:mx-0 lg:mx-0">
      <div className="space-y-4">
        <h1 className="font-bold text-5xl md:text-6xl text-[#001931] text-center ">We Build <br /><span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">Productive</span>{' '}Apps</h1>
        <p className="md:text-xl text-base text-[#627382] text-center">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <a
          href="https://play.google.com/store/apps?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-[#001931] flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-r font-medium hover:from-[#9F62F2] hover:to-[#632EE3] hover:text-white">
          <img
            className="w-5 rounded-sm"
            src="https://i.ibb.co.com/1fnCtHTw/play.jpg"
            alt=""
          />
          Google Play
        </a>
        <a
          href="https://www.apple.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-[#001931] flex items-center gap-2 transition-all duration-300 hover:bg-gradient-to-r font-medium hover:from-[#9F62F2] hover:to-[#632EE3] hover:text-white">
          <img
            className="w-5 rounded-sm"
            src="https://i.ibb.co.com/d9pDmpN/appstore.jpg"
            alt=""
          />
          App Store
        </a>
      </div>
      <div className="flex items-center justify-center mx-5 md:mx-0 lg:mx-0 mt-20 mb-0">
        <img src={Hero} alt="" />
      </div>


    </div>
      <div className=" w-screen bg-gradient-to-r from-[#9F62F2] to-[#632EE3] py-10">
        <h1 className="font-bold text-4xl md:text-5xl  text-white text-center mb-10">Trusted by Millions, Built for You</h1>

        <div className="text-white flex items-center justify-around mt-7 mx-5 md:mx-0 lg:mx-0">
          <div className="text-center">
          <p className="text-sm md:text-base">Total Downloads</p>
          <h1 className="text-3xl md:text-[64px]   font-extrabold">29.6M</h1>
          <p className="text-sm md:text-base">21% more than last month</p>
        </div>
          <div className="text-center">
          <p className="text-sm md:text-base">Total Reviews</p>
          <h1 className="text-3xl md:text-[64px]  font-extrabold">906K</h1>
          <p className="text-sm md:text-base">46% more than last month</p>
        </div>
          <div className="text-center">
          <p className="text-sm md:text-base">Active Apps</p>
          <h1 className="text-3xl md:text-[60px]  font-extrabold">132+</h1>
          <p className="text-sm md:text-base">31 more will Launch</p>
        </div>

        
        </div>
        
      </div>
      
</>
  );
};

export default Home;
