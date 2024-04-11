import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioDetail from "./components/PortfolioDetail";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" Component={Home} />
          <Route path="/portfolio/:id" Component={PortfolioDetail} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
