import NavBar from "./components/NavBar"
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" />
          <Route path="/budget-calculator" />
          <Route path="/job-portal" />
          <Route path="/forum" />
          <Route path="/about" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </>
  )
}

export default App
