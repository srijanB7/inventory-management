
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { Departments } from './pages/Departments'
import { Products } from './pages/Products'
import { SingleProduct } from './pages/SingleProduct'
import { AddItem } from './pages/AddItem'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/departments" element={<Departments />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/add" element={<AddItem />}/>
      </Routes>
    </>
  )
}

export default App
