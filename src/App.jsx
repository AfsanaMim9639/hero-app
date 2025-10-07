
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
      </Routes>
    </Router>
  );
}

export default App;
