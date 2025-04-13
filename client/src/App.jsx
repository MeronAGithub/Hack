import { useEffect, useState } from 'react';
import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import ContactPage from "./pages/ContactPage"
import SignUpPage from "./pages/SignUpPage"
import Diagnostic from "./pages/Diagnostic"
import Dashboard from "./pages/Dashboard"
import Signup from "./components/Signup"
import LogIn from "./components/Login"
import LessonModulePage from "./pages/LessonModulePage"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/diagnostic" element={<Diagnostic />}></Route>
        <Route path="/dashboard/*" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/lesson/:moduleId" element={<LessonModulePage />} />
      </Routes>
    </Router>
  )
}

export default App;