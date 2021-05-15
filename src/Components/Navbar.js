import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ActiveNav } from './ActiveNav';

export default function Navbar() { 

  function changeState(name) {
    document.getElementById("navbarToggler").classList.remove("show");
    document.getElementById("navbar-toggle").classList.add("collapsed");
    document.getElementById("navbar-toggle").setAttribute("aria-expanded", "false");
    ActiveNav(name);
  }

  function changeToHome() {
    document.getElementById("navbarToggler").classList.remove("show");
    document.getElementById("navbar-toggle").classList.add("collapsed");
    document.getElementById("navbar-toggle").setAttribute("aria-expanded", "false");
  }

  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" id = "navbar-toggle" type="button" 
            data-bs-toggle="collapse" data-bs-target="#navbarToggler" 
            aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className = "brand">
            <Link className="navbar-brand" to="/" onClick = {() => changeToHome()}><strong>SURVEY LEGENDS</strong></Link>
          </div>
          <div className="collapse navbar-collapse" id="navbarToggler">
             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" id = "createform" to="/create-form" 
                  onClick = {() => changeState("createform")} aria-current = "false" style = {{fontWeight: "500"}}>
                  CREATE FORM
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id = "audience" to="/audience" 
                  onClick = {() => changeState("audience")} aria-current = "false" style = {{fontWeight: "500"}}>
                  AUDIENCE
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}