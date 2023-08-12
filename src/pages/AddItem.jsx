import React, { useState } from "react";
import "../App.css";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { useProduct } from "../contexts/ProductContext";

export const AddItem = () => {
    const { diffDepartments, addProduct } = useProduct();
    const updatedDepts = ["Select Department", ...diffDepartments];

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            id: crypto.randomUUID(),
            name,
            department: dept,
            description: desc,
            price,
            stock,
            sku,
            supplier,
            delivered,
            imageUrl
        }
        addProduct(newProduct);
        setDept("Select Department");
        setName("");
        setDesc("");
        setPrice("");
        setStock("");
        setSku("");
        setSupplier("");
        setDelivered("");
        setImageUrl("");
    };

    const [dept, setDept] = useState("Select Department");
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [sku, setSku] = useState("");
    const [supplier, setSupplier] = useState("");
    const [delivered, setDelivered] = useState(0);
    const [imageUrl, setImageUrl] = useState("");

    return (
        <div className="add">
            <Sidebar />
            <main className="add-content">
                <h1>Add New Product</h1>
                <form onSubmit={handleSubmit}>
                    <div className="user-input">
                        <label>Department:</label>
                        <select
                            required={true}
                            value={dept}
                            onChange={(e) => setDept(e.target.value)}
                        >
                            {updatedDepts.map((dep, ind) => (
                                <option key={ind}>{dep}</option>
                            ))}
                        </select>
                    </div>
                    <div className="user-input">
                        <label>Name:</label>
                        <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Description: </label>
                        <input
                            type="text"
                            required={true}
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Price: </label>
                        <input
                            type="number"
                            required={true}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Stock: </label>
                        <input
                            type="number"
                            required={true}
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>SKU: </label>
                        <input
                            type="text"
                            required={true}
                            value={sku}
                            onChange={(e) => setSku(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Supplier: </label>
                        <input
                            type="text"
                            required={true}
                            value={supplier}
                            onChange={(e) => setSupplier(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Delivered: </label>
                        <input
                            type="number"
                            required={true}
                            value={delivered}
                            onChange={(e) => setDelivered(e.target.value)}
                        />
                    </div>
                    <div className="user-input">
                        <label>Image Url:</label>
                        <input
                            type="url"
                            required={true}
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        
                        className="add-product-btn"
                    >
                        Add product
                    </button>
                </form>
            </main>
        </div>
    );
};
