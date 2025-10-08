import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertTriangle } from "lucide-react"; // optional, nice warning icon

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <AlertTriangle className="text-red-500 w-16 h-16 mb-4" />
      <h1 className="text-6xl font-bold text-gray-800 mb-3">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md mb-6">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
        Please check the URL or return to the homepage.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:opacity-90 transition"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
