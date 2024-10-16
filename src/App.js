import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./CheckoutPage";
import Card from "./Card";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<CheckoutPage />} />
          <Route path="/Card" element={<Card />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
