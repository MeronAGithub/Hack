import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LearnContent from "../components/dashboard/LearnContent";
import LeaderboardContent from "../components/dashboard/LeaderboardContent";
import MissionsContent from "../components/dashboard/MissionsContent";
import ProfileContent from "../components/dashboard/ProfileContent";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const location = useLocation();

    return (
        <div className="dashboard-container">
            <Sidebar />
            <main className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Dashboard</h1>
                </div>
                <div className="dashboard-main">
                    <Routes>
                        <Route path="learn" element={<LearnContent />} />
                        <Route path="leaderboard" element={<LeaderboardContent />} />
                        <Route path="missions" element={<MissionsContent />} />
                        <Route path="profile" element={<ProfileContent />} />
                        <Route path="" element={<Navigate to="learn" replace />} />
                        <Route path="*" element={<Navigate to="learn" replace />} />
                    </Routes>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;