import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ProductsPage } from "./pages/MainPage/ProductsPage";
import { CatalogPage } from "./pages/CatalogPage";
import Layout from "./components/common/Layout/Layout";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </Layout>
  )
}

export default App;
