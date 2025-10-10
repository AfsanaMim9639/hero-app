import React from "react";
import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import BannerImage from "../assets/hero.png";
import appsData from "../data/appsData"; 
import { useNavigate } from "react-router-dom";
import GooglePlayLogo from "../assets/play-store.png";
import { FaDownload, FaStar, FaAppStore } from "react-icons/fa"; 

// Number formatting function
function formatNumber(num) {
  if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* ===== Banner Section ===== */}
<section className="w-full bg-[#E5E5E5] text-gray-900 text-center flex flex-col items-center pt-12 pb-0 px-5 sm:px-10">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
    We Build <br />
    <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
      Productive
    </span>{" "}
    Apps
  </h1>

  <p className="text-[#627382] text-sm sm:text-base max-w-2xl text-justify mt-3 mb-6 leading-relaxed">
    At <b>HERO.IO</b>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
    
    Our goal is to turn your ideas into digital experiences that truly make an impact.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    {/* Google Play Button */}
    <a
      href="https://play.google.com/store"
      target="_blank"
      className="flex items-center justify-center gap-2 bg-[#D2D2D2] px-6 py-3 rounded border border-gray-400 font-medium hover:bg-gray-300 transition"
    >
      <img
        src={GooglePlayLogo}
        alt="Google Play"
        className="h-8 w-auto"
      />
      <span className="text-gray-900">Play Store</span>
    </a>

    {/* App Store Button */}
    <a
      href="https://www.apple.com/app-store/"
      target="_blank"
      className="flex items-center justify-center gap-2 bg-[#D2D2D2] px-6 py-3 rounded border border-gray-400 font-medium hover:bg-gray-300 transition"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
        alt="App Store"
        className="h-6 w-auto"
      />
      <span className="text-gray-900">App Store</span>
    </a>
  </div>

  <img
    src={BannerImage}
    alt="Banner Illustration"
    className="w-[90%] sm:w-[600px] h-auto object-contain mt-6"
  />
</section>

      {/* ===== Stats Section ===== */}
 
<section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-sans py-16">
  <div className="max-w-6xl mx-auto text-center px-4">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-14">
      Trusted By Millions, Built For You
    </h2>

    {/* Stats Row */}
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-14 sm:gap-24">
      
      {/* Total Downloads */}
      <div className="space-y-2">
        <h3 className="text-base font-normal opacity-90">Total Downloads</h3>
        <p className="text-4xl sm:text-5xl font-bold">29.6M</p>
        <p className="text-sm font-normal opacity-80 mt-1">21% More Than Last Month</p>
      </div>

      {/* Total Reviews */}
      <div className="space-y-2">
        <h3 className="text-base font-normal opacity-90">Total Reviews</h3>
        <p className="text-4xl sm:text-5xl font-bold">906K</p>
        <p className="text-sm font-normal opacity-80 mt-1">46% More Than Last Month</p>
      </div>

      {/* Active Apps */}
      <div className="space-y-2">
        <h3 className="text-base font-normal opacity-90">Active Apps</h3>
        <p className="text-4xl sm:text-5xl font-bold">132+</p>
        <p className="text-sm font-normal opacity-80 mt-1">31 More Will Launch</p>
      </div>

    </div>
  </div>
</section>

      {/* ===== Top Apps Section ===== */}
<section className="w-full py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <div className="text-center mb-6">
  <h2 className="text-3xl font-bold mb-4">Top Apps</h2>
  <p className="text-[#627382] text-sm max-w-2xl mx-auto leading-relaxed">
   Explore All Top Apps on the Market developed by us.
  </p>
</div>


    {/* Apps Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {appsData.slice(0, 8).map((app) => (
        <div
          key={app.id}
          className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          onClick={() => navigate(`/apps/${app.id}`)}
        >
          {/* App Image (full visible but square) */}
          <div className="w-full aspect-square flex items-center justify-center bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <img
              src={app.image}
              alt={app.title}
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* App Title */}
          <h3 className="font-semibold text-lg text-gray-800 mb-3">
             {app.title}
          </h3>

          {/* Downloads & Rating Row */}
          <div className="flex items-center justify-between text-sm font-medium">
            <div className="flex items-center gap-2 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-4 h-4"
              >
                <path d="M.5 9.9l6.364 6.364a.5.5 0 00.707 0L13.936 9.9a.5.5 0 00-.707-.707L8.5 13.922V.5a.5.5 0 00-1 0v13.422L1.207 9.193a.5.5 0 00-.707.707z" />
              </svg>
              <span>{formatNumber(app.downloads)}</span>
            </div>

            <div className="flex items-center gap-1 text-yellow-500">
              <span>⭐</span>
              <span className="text-gray-700">{app.ratingAvg.toFixed(1)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Show All Button */}
    <button
      onClick={() => navigate("/all-apps")}
      className="mt-12 px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg font-semibold hover:opacity-90 transition"
    >
      Show All
    </button>
  </div>
</section>


    </div>
  );
}
