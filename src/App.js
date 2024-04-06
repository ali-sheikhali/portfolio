import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
