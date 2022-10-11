import { useEffect, useState } from "react";
import React from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";

/* 
function addProduct() {
  setProducts((prevState) => [
    ...prevState,
    {
      id: prevState.length + 101,
      name: "product" + (prevState.length + 1),
      price: prevState.length * 100 + 100,
      brand: "some brand",
      description: "some description",
      pictureUrl: "http://picsum.photos/200",
    },
  ]);
  <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button> -> add this line of code to return statment of catalog
} */

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://localhost:50001/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}
