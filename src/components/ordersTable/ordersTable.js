import React, { useState, Suspense } from "react";
import "./ordersTable.css";
import ReactSearchBox from "react-search-box";
import { EditOrders } from "../modals/editOrders";
import { AddOrders } from "../modals/addOrders";
import orderListData from "../../jsonData/orders.json";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
const OrdertList = React.lazy(() => import("./orderList"));

export default function Orders() {
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchvalue] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setAddEditModal] = useState(false);
  const [editOrders, setEditOrders] = useState([]);

  const onEditOrders = (order) => {
    setEditOrders(order);
    setShowEditModal(true);
  };

  const onAddOrders = () => {
    setAddEditModal(true);
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const handleAddClose = () => {
    setAddEditModal(false);
  };

  const loadOrders = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const onSearch = (value) => {
    if (value.length >= 3) {
      console.log(value);
    }
  };

  const orderList = orderListData.map((data) => (
    <OrdertList item={data} onEditClick={onEditOrders}></OrdertList>
  ));

  return (
    <div>
      <div className="addOrders">
        <OverlayTrigger
          key="addOrder"
          overlay={<Tooltip id="addOrdersToolTip">Add Order</Tooltip>}
        >
          <a
            class="fa fa-plus icon"
            aria-hidden="true"
            onClick={onAddOrders}
          ></a>
        </OverlayTrigger>
      </div>
      <div className="offerDiv">
        <label>
          Select Category:
          <select value={category} onChange={loadOrders} className="dropdown">
            <option value="All">All</option>
            <option value="OfficeSupplies">Office Supplies</option>
            <option value="SchoolSupplies">School Supplies</option>
            <option value="PaperProducts">Paper Products</option>
            <option value="PrintingService">Printing Service</option>
            <option value="CleaningProducts">Cleaning Products</option>
          </select>
        </label>
      </div>
      <div className="searchBar">
        <ReactSearchBox
          placeholder="Search by order name"
          value=""
          onChange={onSearch}
        />
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>{orderList}</Suspense>
      </div>
      <EditOrders
        show={showEditModal}
        data={editOrders}
        onHide={handleClose}
      ></EditOrders>
      <AddOrders show={showAddModal} onHide={handleAddClose}></AddOrders>
    </div>
  );
}
