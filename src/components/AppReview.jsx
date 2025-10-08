import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function AppReview({ ratings, description }) {
  // Prepare data for Recharts
  const chartData = ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      {/* ===== Chart Section ===== */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h3 className="text-xl font-semibold mb-4">App Reviews</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#632EE3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* ===== Description Section ===== */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Description</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
