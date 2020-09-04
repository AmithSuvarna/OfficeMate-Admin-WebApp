import React, { useState, Suspense } from "react";
import ReactSearchBox from "react-search-box";
import "./products.css";
import { EditProduct } from "../modals/editProduct";
import { AddProduct } from "../modals/addProduct";
import productListData from "../../jsonData/products.json";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
// import ProductList from "./productList";
const ProductList = React.lazy(() => import("./productList"));

export default function Products() {
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchvalue] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setAddEditModal] = useState(false);
  const [editProduct, setEditProduct] = useState([]);

  const onEditProduct = (product) => {
    setEditProduct(product);
    setShowEditModal(true);
  };

  const onAddProduct = () => {
    setAddEditModal(true);
  };

  const handleClose = () => {
    setShowEditModal(false);
  };

  const handleAddClose = () => {
    setAddEditModal(false);
  };

  const loadProduts = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value);
  };

  const onSearch = (value) => {
    if (value.length >= 3) {
      console.log(value);
    }
  };

  const productList = productListData.map((data) => (
    <ProductList item={data} onEditClick={onEditProduct}></ProductList>
  ));

  return (
    <div>
      <div className="addProduct">
        <OverlayTrigger
          key="add"
          overlay={<Tooltip id="addProductToolTip">Add Product</Tooltip>}
        >
          <a
            class="fa fa-plus icon"
            aria-hidden="true"
            onClick={onAddProduct}
          ></a>
        </OverlayTrigger>
      </div>
      <div className="offerDiv">
        <label>
          Select Category:
          <select value={category} onChange={loadProduts} className="dropdown">
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
          placeholder="Search by product name"
          value=""
          onChange={onSearch}
        />
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>{productList}</Suspense>
      </div>
      <EditProduct
        show={showEditModal}
        data={editProduct}
        onHide={handleClose}
      ></EditProduct>
      <AddProduct show={showAddModal} onHide={handleAddClose}></AddProduct>
    </div>
  );
}
