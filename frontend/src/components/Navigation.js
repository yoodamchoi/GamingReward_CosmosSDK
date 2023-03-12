import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Dashboard from './Dashboard'
import LoginSignup from './Login-Signup'
import GameSelection from './Game-Selection'
import Game from './Game'
const Navigation = () => {

  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg " >
          <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={"nav-link"} to="/">
                Login/Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/Dashboard">
                Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/Game-Selection">
                Game Selection
                </Link>
              </li>
              <li className="nav-item">
                <Link className={"nav-link"} to="/Game">
                Game
                </Link>
              </li>
           
            </ul>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<LoginSignup />} ></Route>
        <Route path="/Dashboard" element={<Dashboard />} ></Route>
        <Route path="/Game-Selection" element={<GameSelection />} ></Route>
        <Route path="/Game" element={<Game />} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
