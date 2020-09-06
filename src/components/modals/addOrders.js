import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./editOrders.css";

export function AddOrders(props) {
  console.log(props.data);
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Order</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div class="form-group row">
            <label htmlFor="name" class="col-sm-4 col-form-label">
              Order Name
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="name"></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="brand" class="col-sm-4 col-form-label">
              Category
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="brand"></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="brand" class="col-sm-4 col-form-label">
              Description
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="brand"></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="price" class="col-sm-4 col-form-label">
              Price
            </label>
            <div class="col-sm-8">
              <input type="text" class="form-control" id="price"></input>
            </div>
          </div>
          <div class="form-group row">
            <label htmlFor="dateCreated" className="col-sm-4 col-form-label">
              Category
            </label>
            <div class="col-sm-8">
              <select class="form-control" id="sel1">
                <option value="Select">-- Select Category --</option>
                <option value="OfficeSupplies">Office Supplies</option>
                <option value="SchoolSupplies">School Supplies</option>
                <option value="PaperProducts">Paper Products</option>
                <option value="PrintingService">Printing Service</option>
                <option value="CleaningProducts">Cleaning Products</option>
              </select>
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
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
