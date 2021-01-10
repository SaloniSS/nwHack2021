
import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../styles/landing.css';


function Landing() {
    return (
        <div className="Landing">
            <h1>Landing Page</h1>
            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>
        </div>
    );
}

export default Landing;
