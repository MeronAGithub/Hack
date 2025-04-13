import { useEffect, useState } from 'react';
import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ContactPage from "./pages/ContactPage"
import SignUpPage from "./pages/SignUpPage"
import Diagnostic from "./pages/Diagnostic"
import Dashboard from "./pages/Dashboard"
import LessonModulePage from "./pages/LessonModulePage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/diagnostic" element={<Diagnostic />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/lesson/:moduleId" element={<LessonModulePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App;