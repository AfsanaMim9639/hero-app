import React from "react";
import { SiGoogleplay } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import BannerImage from "../assets/hero.png";
import appsData from "../data/appsData"; // apps JSON
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full">

      {/* ===== Banner Section ===== */}
      <section className="w-full bg-[#E5E5E5] text-gray-900 text-center flex flex-col items-center pt-12 pb-0">
        <br />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
  We Build <br />
  <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
    Productive
  </span>{" "}
  Apps
</h1>

<p className="text-[#627382] text-sm max-w-2xl text-justify mt-3 mb-6 leading-relaxed">
  At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
  <br />
  Our goal is to turn your ideas into digital experiences that truly make an impact.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="https://play.google.com/store"
    target="_blank"
    className="flex items-center justify-center gap-2 bg-[#D2D2D2] text-gray-900 px-6 py-3 rounded border border-gray-400 font-semibold hover:bg-gray-300 transition"
  >
    <SiGoogleplay size={24} color="#34A853" /> {/* Google Play green */}
    <span className="text-gray-900">Play Store</span>
  </a>

  <a
    href="https://www.apple.com/app-store/"
    target="_blank"
    className="flex items-center justify-center gap-2 bg-[#D2D2D2] text-gray-900 px-6 py-3 rounded border border-gray-400 font-semibold hover:bg-gray-300 transition"
  >
    <FaApple size={24} color="#000000" /> {/* Apple logo black */}
    <span className="text-gray-900">App Store</span>
  </a>
</div>

        <img src={BannerImage} alt="Banner Illustration" className="w-[600px] h-auto object-contain mt-4" style={{ marginBottom: 0 }} />
      </section>

      {/* ===== Stats Section ===== */}
   <section className="w-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-sans">
  <div className="px-6 text-center py-16">
    <h2 className="text-3xl font-bold mb-12">Trusted by Millions, Built for You</h2>

    <div className="flex flex-col sm:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">

      {/* Total Downloads */}
      <div className="flex-1 flex flex-col items-center p-6 rounded-lg bg-[#4AC29A] transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <h2 className="text-lg font-semibold">Total Downloads</h2>
        <p className="text-4xl font-extrabold my-2">29.6M</p>
        <p className="text-sm opacity-80">21% more than last month</p>
      </div>

      {/* Total Reviews */}
      <div className="flex-1 flex flex-col items-center p-6 rounded-lg bg-[#5B9CF3] transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <h2 className="text-lg font-semibold">Total Reviews</h2>
        <p className="text-4xl font-extrabold my-2">906K</p>
        <p className="text-sm opacity-80">46% more than last month</p>
      </div>

      {/* Active Apps */}
      <div className="flex-1 flex flex-col items-center p-6 rounded-lg bg-[#F39C5B] transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
        <h2 className="text-lg font-semibold">Active Apps</h2>
        <p className="text-4xl font-extrabold my-2">132+</p>
        <p className="text-sm opacity-80">31 more will Launch</p>
      </div>

    </div>
  </div>
</section>



      {/* ===== Top Apps Section ===== */}
<section className="w-full py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-10">Top Apps</h2>

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
            {app.companyName} : {app.title}
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
              <span>{app.downloads.toLocaleString()}</span>
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
