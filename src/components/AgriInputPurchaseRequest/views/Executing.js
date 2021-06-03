import React from "react";
import ShowOrders from "../ShowOrders";

const Executing = () => {
  const headers = ["Undo Batch", "Assign Suppliers", "Generate PO"];

  const showHeaders = () => (
    <div className="executing_header">
      {headers.map((header, index) => {
        return (
          <div key={index} className="executing_header_item">
            {header}
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="executing_desc">
      {showHeaders()}
      <div className="executing_body">
        <div className="body_header">
          <div className="body_header_f">Executing Agri-Input Orders</div>
          <div className="body_header_s">Batched By</div>
        </div>
        <ShowOrders />
      </div>
    </div>
  );
};

export default Executing;
