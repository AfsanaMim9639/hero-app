import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";
import ErrorPage from "./pages/ErrorPage";
import MyInstallation from "./pages/MyInstallation";
import Loader from "./components/Loader"; 

function Installation() {
  return <div className="p-6">Installation Page</div>;
}

// Loader integrated Layout
function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  // show loader during route change
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-apps" element={<AllApps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/my-installation" element={<MyInstallation />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
