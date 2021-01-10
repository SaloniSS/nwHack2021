
import React from "react";
import { Link, withRouter } from "react-router-dom";

function Login() {
    return (
        <div className="Login">
            <h1>Login Page</h1>
            <Link to="/home">
                <button>
                    Login
                </button>
            </Link>
        </div>
    );
}

export default Login;
