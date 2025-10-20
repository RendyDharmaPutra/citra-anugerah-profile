import { useMemo } from "react";
import { useProductCategory } from "../../context/ProductCategoryContext";
import { ProductCard } from "./ProductCard";
import type { ProductType } from "@/types/models/product-type";

export const ProductGallery = ({ products }: { products: ProductType[] }) => {
  const { activeCategory } = useProductCategory();

  const filteredProducts = useMemo(() => {
    return activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {filteredProducts.length > 0 &&
        filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image.formats.medium.url}
            category={product.category}
          />
        ))}
    </section>
  );
};
