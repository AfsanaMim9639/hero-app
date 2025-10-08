import React from "react";
import logo from "../assets/logo.png"; 

export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-center">
      
     
      <h1 className="text-4xl font-bold text-[#632EE3] flex items-center gap-2">
        <span className="animate-pulse">L</span>
        <img
          src={logo}
          alt="loading"
          className="w-8 h-8 animate-spin inline-block"
        />
        <span className="animate-pulse">ading...</span>
      </h1>

      <p className="text-gray-500 mt-2 text-sm">Please wait a moment</p>
    </div>
  );
}
