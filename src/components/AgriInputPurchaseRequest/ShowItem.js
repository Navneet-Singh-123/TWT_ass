import React, { useState } from "react";
import ShowCurrentTable from "./ShowCurrentTable";
import { CSVLink } from "react-csv";
import { tableData } from "../utils/sample";

const ShowItem = ({ item, index }) => {
  const [showTable, setShowTable] = useState(false);
  const { day, month, date, time } = item.profile.dateDetails;
  const headers = [
    { label: "Agri-Input Category", key: "category" },
    { label: "Product Image", key: "img" },
    { label: "Product Description", key: "desc" },
    { label: "Order Quantity", key: "quantity" },
  ];
  const data = tableData[index];

  const handleClick = () => {
    setShowTable(!showTable);
  };

  const handleCheckChange = (e) => {
    setShowTable(e.target.checked);
  };

  const showCol1 = () => (
    <div className="order_ind_1" onClick={handleClick}>
      <input
        type="radio"
        onChange={handleCheckChange}
        checked={showTable}
        style={{ marginTop: "3px" }}
      />
      <div className="order_ind_1_text">{item.orderID}</div>
      <i className={!showTable ? "fa fa-chevron-up" : "fa fa-chevron-down"}></i>
    </div>
  );

  const showCol2 = () => (
    <div className="order_ind_2">
      <div className="order_ind_2_profile">
        <img src={item.profile.photo} alt="Profile" className="profile" />
      </div>
      <div className="order_ind_2_info">
        <div className="info_name">{item.profile.name}</div>
        <div className="info_date">
          {day}, {date} {month}, {time}{" "}
        </div>
      </div>
    </div>
  );

  const showCol3 = () => (
    <div className="order_ind_3">
      <i className="fas fa-file-excel excel_icon"></i>
      <div className="order_ind_3_text">{item.excelId}</div>
      <CSVLink data={data} headers={headers} style={{ color: "black" }}>
        <i className="fa fa-download download_icon" aria-hidden="true"></i>{" "}
      </CSVLink>
    </div>
  );

  return (
    <>
      <div className="order_ind" key={index}>
        {showCol1()}
        {showCol2()}
        {showCol3()}
      </div>
      {showTable && <ShowCurrentTable index={index} />}
    </>
  );
};

export default ShowItem;
