import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { Context } from "../../pages/Context/Context";
// import Image from "pexels.jpg";
function Navbar() {
  const LoginUser = localStorage.getItem("token");
  console.log("LoginUser", LoginUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <header>
      <div className="nav-container">
        <div className="menus">
          <div className="logo">TaxSmart</div>

          <nav>
            <ul className="navbar">
              <li>
                <NavLink className="nav-list" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-list" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-list" to={"/services"}>
                  Services
                </NavLink>
              </li>
              <li>
                {LoginUser ? (
                  <NavLink
                    className="nav-list"
                    onClick={handleLogout}
                    to={"/login"}
                  >
                    Log Out
                  </NavLink>
                ) : (
                  <NavLink className="nav-list" to={"/login"}>
                    Login
                  </NavLink>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
