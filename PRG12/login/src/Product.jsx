import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./ProductList";
import Cart from "./Cart";
function Product() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/products")
      .then(res => setProducts(res.data));
  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]);

  };
  return (
    <div>
      <h1>Simple Shopping Cart</h1>
      <ProductList
        products={products}
        addToCart={addToCart}
      />
      <Cart cart={cart} />
    </div>
  );
}
export default Product;
