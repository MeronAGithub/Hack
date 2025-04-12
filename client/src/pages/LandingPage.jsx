import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <Header />
            <Link to="/contact">
                <button>Contact us</button>
            </Link>
        </>
    )
}

export default LandingPage;