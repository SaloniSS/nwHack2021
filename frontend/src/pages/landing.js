
import React from "react";
import { Link, withRouter} from "react-router-dom";

function Landing() {
  return (
    <div className="Landing">
      <h1>Landing Page</h1>
        <button>           
                <Link to="/login">
                    Login
                </Link>
        </button>
    </div>
  );
}

export default Landing;
