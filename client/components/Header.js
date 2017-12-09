import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link to="/" className="header__logo">
          Geopulse
        </Link>
        <nav className="header__navigation">
          <ul>
            <li>
              <NavLink to="/" className="header__link" activeClassName="header__link--active" exact>
                Feed
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="header__link" activeClassName="header__link--active">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;