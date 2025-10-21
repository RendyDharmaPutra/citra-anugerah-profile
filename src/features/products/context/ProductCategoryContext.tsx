import { ProductCategory } from "@/constants/enum/product-category.enum";
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Definisikan tipe data context
type ProductCategoryContextType = {
  activeCategory: ProductCategory;
  setActiveCategory: (category: ProductCategory) => void;
};

// 2️⃣ Buat context dengan nilai awal undefined (agar bisa dicek)
const ProductCategoryContext = createContext<
  ProductCategoryContextType | undefined
>(undefined);

// 3️⃣ Buat provider
export const ProductCategoryProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>(
    ProductCategory.all,
  );

  return (
    <ProductCategoryContext.Provider
      value={{ activeCategory, setActiveCategory }}
    >
      {children}
    </ProductCategoryContext.Provider>
  );
};

// 4️⃣ Custom hook agar mudah digunakan
export const useProductCategory = () => {
  const context = useContext(ProductCategoryContext);
  if (!context) {
    throw new Error(
      "useProductCategory must be used within a ProductCategoryProvider",
    );
  }
  return context;
};
