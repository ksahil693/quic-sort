import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo.jpg";
import styles from "./css/navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className={"navbar-brand " + styles.logo} to="/">
            <img src={logo} style={{ height: "7vh" }} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={"collapse navbar-collapse " + styles.nav} id="navbarSupportedContent">
            <ul className={'navbar-nav me-auto mb-6 mb-lg-0 styles.middle ' + styles.middle}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/discover">
                  Discover
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/wishlist">
                  Wishlist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/tools">
                  Tools
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/creators">
                  Creators
                </Link>
              </li>
            </ul>
            <div className="d-flex mt-2" role="search">
              <button className="btn btn-outline-dark me-3" type="submit">
                Log in
              </button>
              <button className="btn btn-primary me-3" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
