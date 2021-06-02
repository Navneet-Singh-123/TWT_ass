import React from "react";
import { Link } from "react-router-dom";

const SidebarTop = () => {
  const values = [
    "Agri-Purchase Management",
    "Agri-Input Master Maintenance",
    "Supplier Master Maintenance",
    "Agri-Input Purchase Requests",
  ];

  const links = [
    "/agri-purchase-management",
    "/agri-input-master-maintenance",
    "/supplier-master-maintenance",
    "/agri-input-purchase-request",
  ];

  return (
    <div className="sidebar-top">
      <nav className="clearfix s-navbar">
        <ul className="no_style">
          {values.map((value, index) => {
            return (
              <li key={index} className="sidebar_top_links">
                <Link className="sidebar_links" to={links[index]}>
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarTop;
