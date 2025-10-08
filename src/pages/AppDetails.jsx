import React, { useState } from "react";
import { useParams } from "react-router-dom";
import appsData from "../data/appsData";
import { toast, Toaster } from "react-hot-toast";

// Font Awesome Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faDownload, faComment } from "@fortawesome/free-solid-svg-icons";

// Recharts Imports
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

export default function AppDetails() {
  const { id } = useParams();
  const app = appsData.find((app) => app.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  if (!app) {
    return (
      <div className="text-center mt-12 text-red-500 text-lg font-semibold">
        App not found
      </div>
    );
  }

  // Example review data for horizontal chart
  const reviewData = [
    { rating: "1★", count: Math.floor(app.reviews * 0.1) },
    { rating: "2★", count: Math.floor(app.reviews * 0.15) },
    { rating: "3★", count: Math.floor(app.reviews * 0.2) },
    { rating: "4★", count: Math.floor(app.reviews * 0.25) },
    { rating: "5★", count: Math.floor(app.reviews * 0.3) },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-12">
      <Toaster position="top-right" />

      {/* App Info */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* App Image */}
        <div className="flex-shrink-0 w-64 h-64 overflow-hidden rounded-md shadow">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* App Details */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-2 border-b-2 border-gray-300 pb-2">
            <h1 className="text-3xl font-bold text-[#001931]">
              {app.companyName} : {app.title}
            </h1>
            <p className="text-gray-700">Developed by: {app.companyName}</p>
          </div>

          {/* Metrics */}
          <div className="flex gap-8 mt-6">
            <div className="flex flex-col items-center">
              <span className="text-gray-700 font-semibold">Downloads</span>
              <span className="flex items-center gap-1 text-lg font-semibold bg-gradient-to-r from-[#34A853] to-[#0F9D58] bg-clip-text text-transparent">
                {app.downloads.toLocaleString()}{" "}
                <FontAwesomeIcon icon={faDownload} />
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-gray-700 font-semibold">Rating</span>
              <span className="flex items-center gap-1 text-lg font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {app.ratingAvg.toFixed(1)}{" "}
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-gray-700 font-semibold">Total Reviews</span>
              <span className="flex items-center gap-1 text-lg font-semibold bg-gradient-to-r from-[#FBBC05] to-[#F4B400] bg-clip-text text-transparent">
                {app.reviews} <FontAwesomeIcon icon={faComment} />
              </span>
            </div>
          </div>

          

          {/* Install Button */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handleInstall}
              disabled={installed}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition w-32 ${
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
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-[#001931]">
          App Review Chart
        </h2>
        <ResponsiveContainer width="100%" height={300}>
  <BarChart
    data={reviewData}
    layout="vertical" // horizontal bars
    margin={{ top: 20, right: 30, left: 50, bottom: 20 }}
    barSize={15} // ✅ চিকন বার
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis type="number" />
    <YAxis type="category" dataKey="rating" reversed={true} /> {/* ✅ 1★ নিচে, 5★ উপরে */}
    <Tooltip />
    <Bar dataKey="count" fill="#632EE3">
      <LabelList dataKey="count" position="right" />
    </Bar>
  </BarChart>
</ResponsiveContainer>

      </div>
      {/* App Description */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-[#001931]">App Description</h2>
        <p className="text-gray-700 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
}
