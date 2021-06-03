import React, { useState } from "react";
import Sidebar from "../utils/SidebarComponents/Sidebar";
import Pending from "./views/Pending";
import Executing from "./views/Executing";
import Executed from "./views/Executed";
import Completed from "./views/Completed";

const AgriInputPurchaseRequest = () => {
  const [viewNumber, setViewNumber] = useState(1);

  const myViews = ["pending", "executing", "executed", "completed"];
  var components = [Pending, Executing, Executed, Completed];

  const handleClick = (e) => {
    const val = e.target.innerHTML;
    console.log(val);
    const newIdx = myViews.map((ele) => ele).indexOf(val);
    console.log(newIdx);
    setViewNumber(newIdx);
  };

  const showHeader = () => (
    <div className="header_content">
      <div className="header_content_title">Agri-Input Master Maintenance</div>
      <div className="header_content_buttons">
        {myViews.map((view, index) => {
          return (
            <button onClick={handleClick} key={index} className="dash_btn">
              {view}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <Sidebar>
      <div className="content_desc">
        {showHeader()}
        {components[viewNumber]()}
      </div>
    </Sidebar>
  );
};

export default AgriInputPurchaseRequest;
