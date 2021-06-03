import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import ShowModal from "./ShowModal";

const ShowRow = ({ idx, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{item.category}</td>
      <td style={{ textAlign: "center" }}>
        <img src={item.img} alt="Prod img" />
      </td>
      <td>{item.desc}</td>
      <td style={{ textAlign: "center" }}>{item.quantity}</td>
      <td>
        <Button className="table_button" onClick={openModal}>
          <i className="fa fa-external-link"></i>
        </Button>
        <ShowModal closeModal={closeModal} isOpen={isOpen} item={item} />
      </td>
    </tr>
  );
};

export default ShowRow;
