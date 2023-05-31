import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../iconlib.png";
import "./css/Headinicio.css";

const Headinicio = (props) => {
  
  return (
    <header className="headPrincipal">
      <div className="TitleHead">
        <img src={logo} className="logoPrincipal" alt="logo" />
        <Link className="titlePrincipal" to="/Inicio">
          Unicosta BiblioTec 
        </Link>
      </div>
      <div className="navPrincipal">
        <li className="listHead">
          <ul className="list-item">
            <NavLink className="item-nav" to="/inicio" exact>
              Inicio
            </NavLink>
          </ul>

          <ul className="list-item">
            <NavLink className="item-nav" to="/Login">
              Log In
            </NavLink>
          </ul>
          <ul className="list-item">
            <NavLink className="item-nav" to="/Registro">
              Sign In
            </NavLink>
          </ul>
        </li>
      </div>
    </header>
  );
};
export default Headinicio;
