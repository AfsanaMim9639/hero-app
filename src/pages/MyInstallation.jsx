// src/pages/MyInstallation.jsx
import React, { useEffect, useState } from "react";
import appsData from "../data/appsData";
import { toast, Toaster } from "react-hot-toast";
import starIcon from "../assets/icon-ratings.png";
import reviewIcon from "../assets/icon-review.png";
import downloadIcon from "../assets/icon-downloads.png";

export default function MyInstallation() {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // New state for sorting

  // Load installed apps from localStorage
  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const installedFullApps = appsData.filter((app) => savedApps.includes(app.id));
    setInstalledApps(installedFullApps);
  }, []);

  // Handle uninstall
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);

    const savedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const newSavedApps = savedApps.filter((id) => id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(newSavedApps));

    toast.success("App uninstalled successfully!");
  };

  // Handle sorting
  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sortedApps = [...installedApps];
    if (value === "high-low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads); // Descending
    } else if (value === "low-high") {
      sortedApps.sort((a, b) => a.downloads - b.downloads); // Ascending
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
      <Toaster position="top-right" />

      {/* Centered Title & Subtitle */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Explore all trending apps on the market developed by us.
        </p>
      </div>

      {/* Total Apps Found & Sort Dropdown Row */}
      {installedApps.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
          <span className="text-gray-700 font-medium">
            {installedApps.length} {installedApps.length === 1 ? "App" : "Apps"} Found
          </span>

          <div className="flex items-center gap-2">
            <label className="text-gray-700 font-medium">Sort by Downloads:</label>
            <select
              value={sortOrder}
              onChange={handleSortChange}
              className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            >
              <option value="">Select</option>
              <option value="high-low">High-Low</option>
              <option value="low-high">Low-High</option>
            </select>
          </div>
        </div>
      )}

      {installedApps.length === 0 ? (
        <div className="text-center text-gray-500 text-lg font-semibold">
          No apps installed yet.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4"
            >
              {/* Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 overflow-hidden rounded-md shadow">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* App Details */}
              <div className="flex-1 flex flex-col sm:gap-2">
                <h3 className="text-lg font-semibold">
                  {app.companyName} : {app.title}
                </h3>

                <div className="flex gap-6 mt-2 flex-wrap">
                  {/* Downloads */}
                  <div className="flex items-center gap-1">
                    <img src={downloadIcon} alt="downloads" className="w-5 h-5" />
                    <span className="text-gray-700 text-sm font-medium">
                      {app.downloads.toLocaleString()}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <img src={starIcon} alt="rating" className="w-5 h-5" />
                    <span className="text-gray-700 text-sm font-medium">
                      {app.ratingAvg.toFixed(1)}
                    </span>
                  </div>

                  {/* Size */}
                  <div className="flex items-center gap-1">
                    <img src={reviewIcon} alt="size" className="w-5 h-5" />
                    <span className="text-gray-700 text-sm font-medium">
                      {app.size} MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <div className="flex-shrink-0 mt-2 sm:mt-0">
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
