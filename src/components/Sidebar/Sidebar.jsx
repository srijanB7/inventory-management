import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <aside>
        <NavLink to="/"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            Dashboard
        </NavLink>
        <NavLink to="/departments"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            Departments
        </NavLink>
        <NavLink to="/products"
            className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
            Products
        </NavLink>
    </aside>
  )
}
