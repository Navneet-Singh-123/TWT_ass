import React from "react";
import { Link } from "react-router-dom";

const SidebarBottom = () => {
  return (
    <div>
      <nav className="clearfix s-navbar">
        <ul className="no_style">
          <li className="sidebar_bottom_links">
            <Link className="sidebar_links" to="/tax-master-maintenance">
              Tax Master Maintenance
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarBottom;
