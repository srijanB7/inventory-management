import React from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import "../App.css";

export const Departments = () => {
    const { products, diffDepartments, redirectToDepartment } = useProduct();
    const handleClick = (e) => {
        console.log(e.target.innerText)
        redirectToDepartment(e.target.innerText);
    }    

    return (
        <div className="department">
            <Sidebar />
            <main className="department-content">
                {diffDepartments.map((dep, ind) => (
                    <div className="department-item" key={ind}>
                        <p onClick={handleClick}><Link to={`/products`}>{dep}</Link></p>
                    </div>
                ))}
            </main>
        </div>
    );
};
