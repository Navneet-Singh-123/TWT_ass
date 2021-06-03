import React from "react";
import SidebarBottom from "./SidebarBottom";
import SidebarTop from "./SidebarTop";
const Sidebar = (props) => {
  return (
    <div className="mycontainer">
      <div className="sidebar">
        <div className="sidebar_content">
          <SidebarTop />
          <SidebarBottom />
        </div>
        <div className="bottom-space"></div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default Sidebar;
