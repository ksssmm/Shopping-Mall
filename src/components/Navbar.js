import React, { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light  py-3 border">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Shop
          </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0"></ul>
            <div className="buttons">
              <NavLink to="/cart" className="btn btn-outline-dark">
                <FaShoppingCart /> Cart({state.length})
              </NavLink>
              <NavLink to="/user" className="btn btn-outline-dark ms-2">
                <FiUser />
                User
              </NavLink>
              {isLoggedIn ? (
                <button className="btn btn-outline-dark ms-2" onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <NavLink to="/login" className="btn btn-outline-dark ms-2">
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
