import React, { useState } from 'react'

function ProductPage() {
  const [cart, setCart] = useState([]);
  const [categories, setCategories] = useState([]);
  
  const [products, setProducts] = useState([]);

  function getProducts() {}
  function addProductToCart() {}
  function searchProducts() {}

  return (
    <div>
      <SearchBar onSearch={searchProducts} />
      <Categories data={categories} />
      <Products data={products} />
    </div>
  )
}

export default ProductPage