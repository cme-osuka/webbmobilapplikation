import React from "react";
import useProducts from "./useProducts";

function Products(props) {
  return props.data.map((product) => (
    <div>
      <ProductImage />
      <h3>Product name</h3>
      <p>Kort beskrivning</p>
      <a>Till produkten</a>
    </div>
  ));
}

function ProductsWithHooks() {
  const { products, getProducts } = useProducts();

  return products.map((product) => (
    <div>
      <ProductImage />
      <h3>Product name</h3>
      <p>Kort beskrivning</p>
      <a>Till produkten</a>
    </div>
  ));
}

export default Products;
