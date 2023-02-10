import { useEffect, Suspense } from "react";
import { Link, useLocation } from "react-router-dom";

import "../styles/Header.css";

import logo from "../assets/images/logo.svg";
import logoDark from "../assets/images/logo_dark.svg";

const Header = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="logo" className="logo" />
        <img src={logoDark} alt="logo" className="logo-dark" />
        <Suspense fallback={<h3>Loading...</h3>}>
          <nav>
            {location.pathname !== "/bio" ? (
              <Link to="/bio">
                <p>About</p>
              </Link>
            ) : (
              <Link to="/">
                <p>Home</p>
              </Link>
            )}
          </nav>
        </Suspense>
      </div>

      <div className="header-line" />
    </header>
  );
};

export default Header;
