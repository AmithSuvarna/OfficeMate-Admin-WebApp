import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import "./editOrders.css";

export function EditOrders(props) {
  console.log(props.data);
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group row">
            <label htmlFor="name" class="col-sm-4 col-form-label">
              Order Name
            </label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="name"
                defaultValue={props.data.name}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="prodId" class="col-sm-4 col-form-label">
              Description
            </label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="prodId"
                defaultValue={props.data.description}
                readOnly
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="brand" class="col-sm-4 col-form-label">
              Category
            </label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="brand"
                defaultValue={props.data.category}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="price" class="col-sm-4 col-form-label">
              Price
            </label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="price"
                defaultValue={props.data.totalPrice}
              ></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="invCount" class="col-sm-4 col-form-label">
              Quantity
            </label>
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="invCount"
                defaultValue={props.data.quantity}
              ></input>
            </div>
          </div>
          
         

          {/* <div class="form-group row">
            <div class="col-sm-8">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div> */}
        </form>
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
