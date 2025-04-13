// import logo from "../assets/Scholarship.png"
// import { Link } from "react-router-dom"


// export default function Header() {
//     return (
//         <>
//             <nav>
//                 <div id="navigation">
//                     <div>
//                         <img src={logo} id="logo" alt="logo"></img>
//                         <h4 id="logo-text">Biz <span> Lingo</span></h4>
//                     </div>
//                     <h5>About Us</h5>
//                     <h5>Contact</h5>
//                 </div>
//                 <div id="register-buttons">
//                     <Link to="/signup">
//                         <button id="signup">Sign Up</button>
//                     </Link>
//                     <Link to="/login">
//                         <button id="login">Login</button>
//                     </Link>
//                 </div>
//             </nav>
//         </>
//     )
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../assets/Scholarship.png";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="site-header">
            <div className="header-container">
                <Link to="/" className="header-logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                    <div className="logo-text">Biz<span>Lingo</span></div>
                </Link>

                <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`menu-icon ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`site-navigation ${menuOpen ? 'menu-open' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/about" className="nav-link">About</Link></li>
                        <li><Link to="/features" className="nav-link">Features</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>

                    <div className="auth-buttons">
                        <Link to="/login">
                            <button className="header-button login-button">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="header-button signup-button">Sign Up</button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;