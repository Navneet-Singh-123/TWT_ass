import React from "react";
import { tableData } from "../utils/sample";
import ShowRow from "./ShowRow";

const ShowCurrentTable = ({ index }) => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Agri-Input Category</th>
          <th>Product Image</th>
          <th>Product Description</th>
          <th>Order Quantity</th>
        </tr>
      </thead>
      <tbody>
        {tableData[index].map((item, idx) => (
          <ShowRow key={idx} item={item} idx={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default ShowCurrentTable;
