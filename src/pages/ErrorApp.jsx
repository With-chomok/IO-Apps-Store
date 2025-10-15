import React from "react";
import { Link } from "react-router-dom";
import AppError from '../assets/App-Error.png'
const ErrorApp = () => {

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-5">
        <img src={AppError} alt="" />
      <h1 className="md:text-6xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-[#9F62F2] to-[#632EE3] mb-2">
        OPPS!! APP NOT FOUND
      </h1>
      <p className="md:text-base text-sm text-gray-700 mt-2">The App you are requesting is not found on our system.  please try another apps </p>
      <Link
        to="/apps"
        className="btn border-none mt-6 bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white px-6 py-3  shadow-lg hover:scale-105 transition-transform duration-200">
        Go Back!
      </Link>
    </div>
  );
};


export default ErrorApp;