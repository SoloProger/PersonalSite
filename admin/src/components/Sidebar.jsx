import React from "react";
import { sidebarList } from "../utils/linkList";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        {sidebarList.map((link) => (
          <li className="sidebar-list-item" key={link.to}>
            <NavLink
              className="link"
              to={link.to}
              activeClassName="active-link"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
