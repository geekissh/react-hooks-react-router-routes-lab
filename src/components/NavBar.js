import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink to="/" style={{ display: "block" }}>Home</NavLink>
      <NavLink to="/movies" style={{ display: "block" }}>Movies</NavLink>
      <NavLink to="/directors" style={{ display: "block" }}>Directors</NavLink>
      <NavLink to="/actors" style={{ display: "block" }}>Actors</NavLink>
    </div>
  );
}

export default NavBar;
