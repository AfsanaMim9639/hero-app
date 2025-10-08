import React from "react";
import { useNavigate } from "react-router-dom";
import appsData from "../data/appsData";

export default function AllAppsSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">All Apps</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {appsData.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/apps/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-36 object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold text-lg mb-1">{app.title}</h3>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>Downloads: {app.downloads.toLocaleString()}</span>
                <span>⭐ {app.ratingAvg.toFixed(1)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
