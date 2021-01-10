import React from "react";
import { Link, withRouter } from "react-router-dom";
import '../styles/styling.css';


function Landing() {
    return (
        <div className="Landing">
            <h1>Cerv</h1>
            <p>Opportunities to help out in your community.</p>
            <Link to="/login">
                <button>
                    Login
                </button>
            </Link>
        </div>
    );
}

export default Landing;
