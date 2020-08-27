import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./editProduct.css";

export function EditProduct(props) {
  console.log(props.data);
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            <div>
              <label className="modalLabel">Product Name:</label>
            </div>
            <div>
              <label className="modalLabel">Product ID:</label>
            </div>
            <div>
              <label className="modalLabel">Price:</label>
            </div>
            <div>
              <label className="modalLabel">Brand:</label>
            </div>
            <div>
              <label className="modalLabel">Description:</label>
            </div>
            <div>
              <label className="modalLabel">Date created:</label>
            </div>
            <div>
              <label className="modalLabel">Category:</label>
            </div>
            <div>
              <label className="modalLabel">Inventory Count:</label>
            </div>
          </div>
          <div className="col">
            <div>
              <input id="name" defaultValue={props.data.Name}></input>
            </div>
            <div>
              <input id="name" defaultValue={props.data.Name}></input>
            </div>
            <div>
              <input id="name" defaultValue={props.data.Name}></input>
            </div>
            <div>
              <input id="name" defaultValue={props.data.Name}></input>
            </div>
            <div>
              <input id="name" defaultValue={props.data.Name}></input>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
