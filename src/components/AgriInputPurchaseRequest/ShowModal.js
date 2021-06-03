import React from "react";
import { Modal, Button } from "react-bootstrap";

const ShowModal = ({ isOpen, closeModal, item }) => {
  return (
    <Modal show={isOpen} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Item Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Agri Input Category: {item.category} <br />
        Product Description: {item.desc} <br />
        Quantity: {item.quantity}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowModal;
