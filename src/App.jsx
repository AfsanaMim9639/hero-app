
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllApps from "./pages/AllApps";
import AppDetails from "./pages/AppDetails";



function Installation() {
  return <div className="p-6">Installation Page</div>;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-apps" element={<AllApps />} />
            <Route path="/apps/:id" element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
