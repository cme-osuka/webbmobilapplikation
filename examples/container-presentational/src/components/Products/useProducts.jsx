import React, { useEffect } from "react";

export default function useProducts(id) {
  const [products, setProducts] = useState([]);

  function getProducts() {
    // fake-fetch

    if (id) {
      // fetch one product
      setProducts([{}, {}, {}]);
    }
    if (!id) {
      // fetch all products
    }
  }

  useEffect(() => {
    getProducts();
  }, [])

  return { products, getProducts }
}
