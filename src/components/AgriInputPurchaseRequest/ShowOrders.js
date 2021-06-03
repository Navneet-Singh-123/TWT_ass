import React from "react";
import ShowItem from "./ShowItem";
import { data } from "../utils/sample";

const ShowOrders = () => {
  return (
    <div>
      {data.map((item, index) => {
        return <ShowItem item={item} key={index} index={index} />;
      })}
    </div>
  );
};

export default ShowOrders;
