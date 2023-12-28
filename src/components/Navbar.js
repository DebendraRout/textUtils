import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg  bg-${props.mode}`}>
        <div className="container ">
          <a className={`navbar-brand text-${props.modeText}`} href="/">
            TextUtils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <a
                  className={`nav-link text-${props.modeText}  active`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className={"nav-item"}>
                <a className={`nav-link text-${props.modeText}`} href="/">
                  About
                </a>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.darkMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className={`form-check-label text-${props.modeText}`}
                htmlFor="flexSwitchCheckDefault"
              >
                {props.darkBtnTxt}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = {
  title: "Default Title",
};
