import React, { Component } from "react";
import "./ordersTable.css";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const products = [
    { id: '1', amount: '100', status: 'Dispatched', createdDate: '09/02/2020', createdBy: 'Dave', UpdatedBy: 'Bob', updatedDate: '10/02/2020', isDeleted: 'No', modeOfPayment: 'Cash' },
    { id: '2', amount: '1200', status: 'Shipped', createdDate: '11/08/2020', createdBy: 'Adam', UpdatedBy: 'Eve', updatedDate: '12/08/2020', isDeleted: 'No', modeOfPayment: 'NetBanking' },
    { id: '3', amount: '300', status: 'Dispatched', createdDate: '28/08/2020', createdBy: 'Ben', UpdatedBy: 'Ben', updatedDate: '29/08/2020', isDeleted: 'Yes', modeOfPayment: 'Paytm' },
    { id: '4', amount: '240', status: 'Dispatched', createdDate: '29/11/2020', createdBy: 'Sita', UpdatedBy: 'Ram', updatedDate: '29/11/2020', isDeleted: 'No', modeOfPayment: 'GPay' },
    { id: '5', amount: '100', status: 'Dispatched', createdDate: '09/02/2020', createdBy: 'Dave', UpdatedBy: 'Bob', updatedDate: '10/02/2020', isDeleted: 'No', modeOfPayment: 'Cash' },
    { id: '6', amount: '1200', status: 'Shipped', createdDate: '11/08/2020', createdBy: 'Adam', UpdatedBy: 'Eve', updatedDate: '12/08/2020', isDeleted: 'No', modeOfPayment: 'NetBanking' },
    { id: '7', amount: '300', status: 'Dispatched', createdDate: '28/08/2020', createdBy: 'Ben', UpdatedBy: 'Ben', updatedDate: '29/08/2020', isDeleted: 'Yes', modeOfPayment: 'Paytm' },
    { id: '8', amount: '240', status: 'Dispatched', createdDate: '29/11/2020', createdBy: 'Sita', UpdatedBy: 'Ram', updatedDate: '29/11/2020', isDeleted: 'No', modeOfPayment: 'GPay' },
    { id: '9', amount: '100', status: 'Dispatched', createdDate: '09/02/2020', createdBy: 'Dave', UpdatedBy: 'Bob', updatedDate: '10/02/2020', isDeleted: 'No', modeOfPayment: 'Cash' },
    { id: '10', amount: '1200', status: 'Shipped', createdDate: '11/08/2020', createdBy: 'Adam', UpdatedBy: 'Eve', updatedDate: '12/08/2020', isDeleted: 'No', modeOfPayment: 'NetBanking' },
    { id: '11', amount: '300', status: 'Dispatched', createdDate: '28/08/2020', createdBy: 'Ben', UpdatedBy: 'Ben', updatedDate: '29/08/2020', isDeleted: 'Yes', modeOfPayment: 'Paytm' },
    { id: '12', amount: '240', status: 'Dispatched', createdDate: '29/11/2020', createdBy: 'Sita', UpdatedBy: 'Ram', updatedDate: '29/11/2020', isDeleted: 'No', modeOfPayment: 'GPay' }
]

const columns = [{
    dataField: 'id',
    text: 'Order ID',
    sort: true
}, {
    dataField: 'amount',
    text: 'Order Amount'
}, {
    dataField: 'status',
    text: 'Order Status'
},
{
    dataField: 'createdDate',
    text: 'Created Date',
    sort: true
},
{
    dataField: 'createdBy',
    text: 'Created By'
},
{
    dataField: 'UpdatedBy',
    text: 'Updated By'
},
{
    dataField: 'updatedDate',
    text: 'Updated Date',
    sort: true
},
{
    dataField: 'isDeleted',
    text: 'IsDeleted'
},
{
    dataField: 'modeOfPayment',
    text: 'Mode Of Payment'
}];

const selectRow = {
    mode: 'checkbox',
    clickToSelect: true
};

const expandRow = {
    renderer: row => (
        <div>
            <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
            <p>You can render anything here, also you can add additional data on every row object</p>
            <p>expandRow.renderer callback will pass the origin row object to you</p>
        </div>
    ),
    showExpandColumn: true,
    expandColumnPosition: 'right',
    expandHeaderColumnRenderer: ({ isAnyExpands }) => {
        if (isAnyExpands) {
            return <b>-</b>;
        }
        return <b>+</b>;
    },
    expandColumnRenderer: ({ expanded }) => {
        if (expanded) {
            return (
                <b>-</b>
            );
        }
        return (
            <b>...</b>
        );
    }
};

export default class OrdersTable extends Component {
    render() {
        return (
            <div className="container" style={{ marginTop: 50 }}>
                <BootstrapTable
                    striped
                    keyField='id'
                    data={products}
                    columns={columns}
                    selectRow={selectRow}
                    expandRow={expandRow}
                    pagination={ paginationFactory() } />
            </div>
        );
    }
}
