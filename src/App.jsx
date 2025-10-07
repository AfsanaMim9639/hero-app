
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  return <div className="p-6">Home Page</div>;
}

function Apps() {
  return <div className="p-6">Apps Page</div>;
}

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
            <Route path="/apps" element={<Apps />} />
            <Route path="/installation" element={<Installation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
