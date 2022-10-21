import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import React from "react";

/**
 * To make TypeScript happy, we need to tell it what to expect on that props object. To accomplish this, we need to create an interface. The interface will contain props that we're going to be referencing and their types. For our example, we might create something like this:
 */
interface Props {
  products: Product[];
}
/**
 * A function that returns grid container component that contains grid items where each product item is mapped to   grid item
 * @param param0 product
 * @returns <Grid>
 */
export default function ProductList({ products }: Props) {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
}
