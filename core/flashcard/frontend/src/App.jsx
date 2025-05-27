import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddFlashcard from "./addflashcard.jsx";
import ViewFlashcards from "./viewflashcard.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Add</Link> | <Link to="/view">View</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AddFlashcard />} />
        <Route path="/view" element={<ViewFlashcards />} />
      </Routes>
    </Router>
  );
}

export default App;
