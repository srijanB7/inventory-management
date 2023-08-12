import { createContext, useContext, useState } from "react";
import { inventoryData } from "../data/InventoryData";

export const ProductContext = createContext();

export const ProudctProvider = ({ children }) => {
    const [products, setProducts] = useState(
        JSON.parse(localStorage.getItem("products")) ?? inventoryData
    );
    const departments = products.reduce((acc, val) => {
        if (!acc[val.department]) {
            acc[val.department] = val.department;
        }
        return acc;
    }, {});
    const [department, setDepartment] = useState(
        localStorage.getItem("department") ?? "All Departments"
    );
    const [lowStock, setLowStock] = useState(
        Boolean(localStorage.getItem("lowStock")) ?? false
    );
    const [sortBy, setSortBy] = useState(
        localStorage.getItem("sortBy") ?? "Name"
    );
    const diffDepartments = Object.keys(departments);

    const addProduct = (newProduct) => {
        localStorage.setItem(
            "products",
            JSON.stringify([...products, newProduct])
        );
        setProducts((prev) => [...prev, newProduct]);
    };

    const redirectToDepartment = (dept) => {
        setDepartment(dept)
    }

    return (
        <ProductContext.Provider
            value={{
                products,
                diffDepartments,
                addProduct,
                department,
                setDepartment,
                lowStock,
                setLowStock,
                sortBy,
                setSortBy,
                redirectToDepartment
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => useContext(ProductContext);
