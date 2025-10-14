import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
 
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
        404
      </h1>
      <p className="text-xl text-gray-700 mt-2"> Page Not Found 😢</p>
      <Link
        to="/"
        className="mt-6 bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
        Back to Home
      </Link>
    </div>
  );
};
export default ErrorPage;
