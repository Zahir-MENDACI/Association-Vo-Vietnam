import React, { useState, useEffect } from "react";
import { ReactComponent as CloseMenu } from "../images/x.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { NavLink } from "react-router-dom";
import BtnToggle from "./BtnToggle/BtnToggle";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  function toggleMobileMenu() {
    document.querySelector(".mobile-bar").classList.toggle("active");
  }

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("Authentification");
    window.location.href = "/Connexion";
  };

  return (
    <div class="Navbar">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
      <BtnToggle className="btn" />
      <nav>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li>
            <NavLink exact to="/" onClick={closeMobileMenu}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/club" onClick={closeMobileMenu}>
              Qui sommes-nous
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/ecole" onClick={closeMobileMenu}>
              Vo Vietnam
            </NavLink>
          </li>
          <li>
            <NavLink exact to="membres" onClick={closeMobileMenu}>
              Membres
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/planning" onClick={closeMobileMenu}>
              Planning
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/tarifs" onClick={closeMobileMenu}>
              Tarifs
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;