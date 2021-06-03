import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowModal from "./ShowModal";

const ShowRow = ({ idx, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <tr key={idx}>
      <td style={{ width: "70px", textAlign: "center" }}>{idx + 1}.</td>
      <td>{item.category}</td>
      <td style={{ textAlign: "center" }}>
        <img src={item.img} alt="Prod img" />
      </td>
      <td>{item.desc}</td>
      <td style={{ textAlign: "center" }}>{item.quantity}</td>
      <td
        style={{
          backgroundColor: "white",
          border: "none",
          fontWeight: "bold",
        }}
      >
        <i
          className="fa fa-external-link"
          onClick={openModal}
          style={{ cursor: "pointer" }}
        ></i>
        <ShowModal closeModal={closeModal} isOpen={isOpen} item={item} />
      </td>
    </tr>
  );
};

export default ShowRow;
