import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import appsData from "../data/appsData";

export default function AllApps() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on search term (case-insensitive)
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full px-6 py-12 bg-white">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        {/* Title & Subtitle */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#001931]">Our All Applications</h1>
          <p className="text-[#627382] mt-2">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* Total Apps & Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-gray-700 font-semibold">
            Total Apps: {filteredApps.length}
          </span>

          <div className="relative w-full sm:w-1/4">
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#632EE3]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Apps Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-28 h-28 object-contain mx-auto mb-2"
              />
              <h3 className="font-semibold text-lg mb-1 text-center">{app.title}</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Downloads: {app.downloads.toLocaleString()}</span>
                <span>⭐ {app.ratingAvg.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-12 text-lg font-semibold">
          No App Found
        </div>
      )}
    </div>
  );
}
