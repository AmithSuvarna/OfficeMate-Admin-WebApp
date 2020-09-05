import React from "react";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function OrderList(props) {
    console.log(props.item);
  const onClickEdit = () => {
    props.onEditClick(props.item);
  };

  const onDelete = () => {
    console.log("Delete");
  };

  return (
    <div
      className={`row ${
        props.item.quantity > 5 ? "order" : "redOrder"
      }`}
    >
      <div className="col">
        
      <img src={props.item.imageUrl}
         width="80px" />
         </div>
        <div className="col">
        <label>
          <strong>Order Name: </strong>
          {props.item.name}
        </label>
        <br />
        <label>
          <strong>Category: </strong>
          {props.item.category}
        </label>
      </div>
      <div className="col">
        <div className="editIcon">
          <OverlayTrigger
            key="editOrder"
            overlay={<Tooltip id="editOrderToolTip">Edit Order</Tooltip>}
          >
            <a
              class="fa fa-pencil icon"
              aria-hidden="true"
              data={props.item}
              onClick={onClickEdit}
            ></a>
          </OverlayTrigger>
          <OverlayTrigger
            key="deleteOrder"
            overlay={
              <Tooltip id="deleteOrderToolTip">Delete Order</Tooltip>
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
          {props.item.totalPrice}
        </label>
        <br />
        <label>
          <strong>Quantity: </strong>
          {props.item.quantity}
        </label>
      </div>
    </div>
  );
}
