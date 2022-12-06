import { useState } from "react";
import Success from "./pages/Success";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
