
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Home() {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <Link to="/">
                <button>
                    Logout
                </button>
            </Link>
        </div>
    );
}

export default Home;