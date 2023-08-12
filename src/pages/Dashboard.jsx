import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";
import "../App.css";

export const Dashboard = () => {
    const { products } = useProduct();
    //console.log(products);
    const details = products.reduce(
        (acc, val) => {
            acc["totalStock"] += parseInt(val.stock);
            acc["totalDelivered"] += parseInt(val.delivered);
            acc["lowStockItems"] += (parseInt(val.stock) <= 10);
            return acc;
        },
        { totalStock: 0, totalDelivered: 0, lowStockItems: 0 }
    );
    
    return (
        <div className="dashboard">
            <Sidebar />
            <main className="dashboard-content">
                <div className="dashboard-item">
                    <p className="total">{details.totalStock}</p>
                    <p >Total Stock</p>
                </div>
                <div className="dashboard-item">
                    <p className="delivered">{details.totalDelivered}</p>
                    <p >Total Delivered</p>
                </div>
                <div className="dashboard-item">
                    <p className="low">{details.lowStockItems}</p>
                    <p >Low Stock Items</p>
                </div>
            </main>
        </div>
    );
};
