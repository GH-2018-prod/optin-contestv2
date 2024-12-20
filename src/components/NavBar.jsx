import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ userEmail, onLogout }) => {
  return (
    <div className="container mt-3">

      <div className="container mt-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mt-5 mb-5">
          <div className="container-fluid">
            {/* Mensaje de bienvenida */}
            <span className="navbar-brand ">
              Welcome, <strong>{userEmail}</strong>
            </span>

            {/* Botón de Logout */}
            <button
              className="btn btn-outline-danger"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </div>

  );
};

Navbar.propTypes = {
  userEmail: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Navbar;
