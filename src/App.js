import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import Game from "./Game";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Page */}
        <Route
          path="/"
          element={
            <div className="App">
              <Spline scene="https://prod.spline.design/lEcfxn6gjSRxgaZd/scene.splinecode" />
              <Link to="/game" className="valentine-button">💝 Play Valentine's Game 💝</Link>
            </div>
          }
        />
        {/* Game Page */}
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
