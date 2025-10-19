import React from "react";
import { ProductCategoryProvider } from "../../context/ProductCategoryContext";
import { ProductFilterAction } from "./FilterAction";

export const ProductFilterSection = () => {
  return (
    <ProductCategoryProvider>
      <ProductFilterAction />
    </ProductCategoryProvider>
  );
};
