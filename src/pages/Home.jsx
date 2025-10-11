import React from "react";
import Hero from "../assets/hero.png";
const Home = () => {
  return (
    <div className="space-y-10 m-20 ">
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
          class="btn text-[#001931] flex items-center gap-2">
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
          class="btn text-[#001931] flex items-center gap-2">
          <img
            className="w-5 rounded-sm"
            src="https://i.ibb.co.com/d9pDmpN/appstore.jpg"
            alt=""
          />
          App Store
        </a>
      </div>
      <div className="flex items-center justify-center ">
        <img src={Hero} alt="" />
      </div>
    </div>
  );
};

export default Home;
