import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import appsData from "../data/appsData";
import { toast, Toaster } from "react-hot-toast";
import starIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import downloadIcon from "../assets/icon-downloads.png";
import appNotFound from "../assets/App-Error.png";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LabelList,
} from "recharts";


// Number formatting function
function formatNumber(num) {
  if (num >= 1000000000) return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return num.toString();
}

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find((app) => app.id === parseInt(id));

  // Check if app is already installed in localStorage
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.includes(app?.id)) {
      setInstalled(true);
    }
  }, [app]);

  const handleInstall = () => {
    if (!app) return;

    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    }
  };

  // App Not Found case
  if (!app) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-50 px-4 gap-6">
  
  
  <img 
    src={appNotFound} 
    alt="App Not Found" 
    className="w-42 h-42 mb-4" 
  />

  <h1 className="text-4xl font-bold text-red-500 mb-2">App Not Found 😢</h1>
  <p className="text-gray-600 text-lg max-w-md">
    Sorry, the app you are looking for does not exist or may have been removed.
  </p>
  <button
    onClick={() => navigate("/", { replace: true })}
    className="mt-4 px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:opacity-90 transition"
  >
    Back to Home
  </button>
</div>

    );
  }

  const reviewData = [
    { rating: "1★", count: Math.floor(app.reviews * 0.1) },
    { rating: "2★", count: Math.floor(app.reviews * 0.15) },
    { rating: "3★", count: Math.floor(app.reviews * 0.2) },
    { rating: "4★", count: Math.floor(app.reviews * 0.25) },
    { rating: "5★", count: Math.floor(app.reviews * 0.3) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12">
      <Toaster position="top-right" />

      {/* App Info */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-shrink-0 w-full sm:w-64 h-48 sm:h-64 overflow-hidden rounded-md shadow mx-auto lg:mx-0">
          <img src={app.image} alt={app.title} className="w-full h-full object-contain" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#001931]">{app.title}</h1>
            <p className="text-gray-700 text-sm sm:text-base">Developed by: {app.companyName}</p>
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mt-6 justify-start">
            <div className="flex flex-col items-center min-w-[90px]">
  {/* Download Icon */}
  <img src={downloadIcon} alt="downloads" className="w-6 h-6 mb-1" />

  {/* Label */}
  <p className="text-gray-500 font-medium text-xs mb-1">Downloads</p>

  {/* Number */}
  <h1 className="text-2xl sm:text-3xl font-bold text-black">
    {formatNumber(app.downloads)}
  </h1>
</div>



            {/* Rating */}
<div className="flex flex-col items-center min-w-[90px]">
  <img src={starIcon} alt="rating" className="w-6 h-6 mb-1" />
  <p className="text-gray-500 font-medium text-xs mb-1">Rating</p>
  <h1 className="text-2xl sm:text-3xl font-bold text-black">
    {app.ratingAvg.toFixed(1)}
  </h1>
</div>

{/* Total Reviews */}
<div className="flex flex-col items-center min-w-[90px]">
  <img src={reviewIcon} alt="reviews" className="w-6 h-6 mb-1" />
  <p className="text-gray-500 font-medium text-xs mb-1">Total Reviews</p>
  <h1 className="text-2xl sm:text-3xl font-bold text-black">
    {app.reviews}
  </h1>
</div>

          </div>

          {/* Install Button */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition w-full sm:w-40 ${
                installed
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white hover:opacity-90"
              }`}
            >
              {installed ? "Installed" : `Install Now (${app.size}) MB`}
            </button>
          </div>
        </div>
      </div>

{/* Horizontal Review Chart */}
<div className="w-full overflow-x-auto border-t-2 border-b-2 border-[#62738280]">
  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-[#001931]">
    App Review Chart
  </h2>
  <div className="w-[350px] sm:w-[500px] md:w-full h-64 sm:h-80 md:h-96 ml-0">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={reviewData}
        layout="vertical"
        margin={{ top: 20, right: 60, left: 0, bottom: 20 }} 
        barSize={15}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis type="category" dataKey="rating" reversed={true} />
        <Tooltip />
        <Bar dataKey="count" fill="#632EE3">
          <LabelList dataKey="count" position="right" offset={10} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>



      {/* App Description */}
      <div>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-[#001931]">App Description</h2>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}
