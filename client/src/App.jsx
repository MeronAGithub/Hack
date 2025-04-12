import { useEffect, useState } from 'react';
import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ContactPage from "./pages/ContactPage"
import SignUpPage from "./pages/SignUpPage"
import Diagnostic from "./pages/Diagnostic"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/diagnostic" element={<Diagnostic />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  )
}

export default App;