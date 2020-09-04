import React from "react";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ProductList(props) {
  //   console.log(props.item);
  const onClickEdit = () => {
    props.onEditClick(props.item);
  };

  const onDelete = () => {
    console.log("Delete");
  };

  return (
    <div
      className={`row ${
        props.item.InventoryCount > 5 ? "product" : "redProduct"
      }`}
    >
      <div className="col">
        <label>
          <strong>Product Name: </strong>
          {props.item.Name}
        </label>
        <br />
        <label>
          <strong>Brand: </strong>
          {props.item.Brand}
        </label>
      </div>
      <div className="col">
        <div className="editIcon">
          <OverlayTrigger
            key="edit"
            overlay={<Tooltip id="editProductToolTip">Edit Product</Tooltip>}
          >
            <a
              class="fa fa-pencil icon"
              aria-hidden="true"
              data={props.item}
              onClick={onClickEdit}
            ></a>
          </OverlayTrigger>
          <OverlayTrigger
            key="delete"
            overlay={
              <Tooltip id="deleteProductToolTip">Delete Product</Tooltip>
            }
          >
            <a
              class="fa fa-trash icon"
              aria-hidden="true"
              onClick={onDelete}
            ></a>
          </OverlayTrigger>
        </div>
        <label>
          <strong>Price: </strong>
          {props.item.Price}
        </label>
        <br />
        <label>
          <strong>Inventory Count: </strong>
          {props.item.InventoryCount}
        </label>
      </div>
    </div>
  );
}
