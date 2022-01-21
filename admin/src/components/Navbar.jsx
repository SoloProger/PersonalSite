import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link className="link" to="/">
          <h2>Админ-панель</h2>
        </Link>
      </div>
      <div className="navbar-list">
        <ul>
          <li className="navbar-list-item">
            <Link className="link" to="http://localhost:3000">
              Вернуться на сайт
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
