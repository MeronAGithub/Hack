// import React from "react";
// import Header from "../components/Header";
// import { Link } from "react-router-dom"
// import "../App.css"
// import logo from "../assets/Scholarship.png"
// import vector from "../assets/image 3.png"

// const LandingPage = () => {
//     return (
//         <div id="landing-container">
//             <Header />
//             <div id="main-body">
//                 <div id="header">
//                     <p>Financial literacy gamified</p>
//                     <h1>Lorem Ipsum Sit<span>Amet</span> Dolor Ipsum</h1>
//                     <p>Lorem ipsum sit amet dolor, lore ipsum sit</p>
//                     <Link to="/contact">
//                         <button id="learn-more">Learn More</button>
//                     </Link>
//                 </div>
//                 <img src={vector} id="vector"></img>
//             </div>
//         </div>
//     )
// }

// export default LandingPage;


import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import logo from "../assets/Scholarship.png";
import vector from "../assets/image 3.png";

const LandingPage = () => {
    return (
        <div className="landing-container">
            <Header />
            <div className="landing-main">
                <div className="landing-content">
                    <div className="landing-tagline">Financial literacy gamified</div>
                    <h1 className="landing-title">
                        Lorem Ipsum Sit<span className="title-highlight">Amet</span> Dolor Ipsum
                    </h1>
                    <p className="landing-description">
                        Lorem ipsum sit amet dolor, lore ipsum sit
                    </p>
                    <div className="landing-cta">
                        <Link to="/contact">
                            <button className="landing-button">Learn More</button>
                        </Link>
                        <Link to="/signup">
                            <button className="landing-button landing-button-secondary">Get Started</button>
                        </Link>
                    </div>
                </div>
                <div className="landing-visual">
                    <img src={vector} alt="Financial education illustration" className="landing-image" />
                    <div className="image-accent"></div>
                </div>
            </div>
            <div className="landing-features">
                <div className="feature-card">
                    <div className="feature-icon">📊</div>
                    <h3>Track Progress</h3>
                    <p>Monitor your financial literacy journey with detailed analytics</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🏆</div>
                    <h3>Earn Rewards</h3>
                    <p>Complete challenges and earn points as you learn</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🔒</div>
                    <h3>Secure Platform</h3>
                    <p>Your financial data stays private and protected</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;