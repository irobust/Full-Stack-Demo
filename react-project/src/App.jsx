import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Button from './components/Button'
import Menu from './components/Menu'
import ProductDetail from './components/ProductDetail'
import Layout from './components/Layout'
import Chart from './components/Chart'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Button />} />
          <Route path="menu" element={<Menu />} />
          <Route path="product" element={<ProductDetail />} />
          <Route path="chart" element={<Chart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
