import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProductsPage from './pages/ProductsPage'
import AgriInputsPage from './pages/AgriInputsPage'
import AgriInputsProductPage from './pages/AgriInputsProductPage'
import AgricultureServicePage from './pages/AgricultureServicePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/agri-inputs" element={<AgriInputsPage />} />
        <Route path="/products/agri-inputs/:slug" element={<AgriInputsProductPage />} />
        <Route path="/services/agriculture-agribusiness" element={<AgricultureServicePage />} />
      </Routes>
    </BrowserRouter>
  )
}
