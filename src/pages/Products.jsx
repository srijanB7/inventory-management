import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

export const Products = () => {
    const {
        products,
        diffDepartments,
        department,
        lowStock,
        sortBy,
        setDepartment,
        setLowStock,
        setSortBy,
    } = useProduct();
    const updatedDepartments = ["All Departments", ...diffDepartments];

    let displayedProducts = [...products];

    if (lowStock) {
        displayedProducts = displayedProducts.filter(
            (product) => product.stock <= 10
        );
    }
    if (department !== "All Departments") {
        displayedProducts = displayedProducts.filter(
            (product) => product.department === department
        );
    }

    if (sortBy === "Name") {
        displayedProducts.sort((a, b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            return 0;
        });
    } else {
        displayedProducts.sort(
            (a, b) =>
                parseInt(a[sortBy.toLowerCase()]) -
                parseInt(b[sortBy.toLowerCase()])
        );
    }
    //console.log(displayedProducts, lowStock)

    return (
        <div className="products">
            <Sidebar />
            <main className="products-content">
                <nav className="products-nav">
                    <h1>Products</h1>
                    <select
                        value={department}
                        onChange={(e) => {
                            setDepartment(e.target.value);
                            localStorage.setItem("department", e.target.value);
                        }}
                    >
                        {updatedDepartments.map((dep, ind) => (
                            <option key={ind}>{dep}</option>
                        ))}
                    </select>
                    <div>
                        <input
                            type="checkbox"
                            checked={lowStock === true}
                            onChange={() => {
                                setLowStock(!lowStock);
                                localStorage.setItem("lowStock", !lowStock);
                            }}
                        />
                        <label>Low Stock Items</label>
                    </div>
                    <div>
                        <label>Sort By: </label>

                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value);
                                localStorage.setItem("sortBy", e.target.value);
                            }}
                        >
                            <option>Name</option>
                            <option>Price</option>
                            <option>Stock</option>
                        </select>
                    </div>
                    <Link to="/add" className="add-btn-link">
                        <button className="add-btn">New</button>
                    </Link>
                </nav>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Supplier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <img
                                        src={product.imageUrl}
                                        className="product-image"
                                        alt="product"
                                    />
                                </td>
                                <td>
                                    <Link to={`/product/${product.id}`}>
                                        {product.name}
                                    </Link>
                                </td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.supplier}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

// id: 1,
//         department: "Kitchen",
//         name: "Stainless Steel Cookware Set",
//         description:
//             "A set of high-quality stainless steel cookware including pots and pans.",
//         price: 149.99,
//         stock: 15,
//         sku: "KITCH001",
//         supplier: "KitchenWonders Inc.",
//         delivered: 15,
//         imageUrl: "https://m.media-amazon.com/images/I/616vJsA33kL.jpg",
