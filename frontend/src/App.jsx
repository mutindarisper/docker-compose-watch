import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Create from "./pages/Create";
import ToggleColorMode from "./Color";

import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="navbar_title">
          <h1>Anime</h1>
        </Link>
        <div className="navbar_links">
          <Link to="/" className="navbar_link">
            Home
          </Link>
          <Link to="/create" className="navbar_link">
            Share
          </Link>
          <Link to="/create" className="navbar_link">
            This is cool
          </Link>
        </div>
      </nav>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/create" element={<Create />} /> */}
      </Routes>
      <ToggleColorMode />
    </Router>
  );
}

export default App;
