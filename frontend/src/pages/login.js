
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Login() {
    return (
        <div className="Landing">
            <h1>Login Page</h1>
            <button>
                <Link to="/home">
                    Login
                </Link>
            </button>
        </div>
    );
}

export default Login;
