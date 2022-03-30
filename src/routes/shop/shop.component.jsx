import React from 'react'
import './shop.styles.scss';
import { Route,Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import CategoryPage from '../category-page/category-page.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<CategoryPage/>} />
    </Routes>
  )
}
export default Shop;
