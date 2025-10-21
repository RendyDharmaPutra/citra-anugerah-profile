import { useMemo } from "react";
import { useProductCategory } from "../../context/ProductCategoryContext";
import { ProductCard } from "./ProductCard";
import type { ProductType } from "@/types/models/product-type";
import { ProductCategory } from "@/constants/enum/product-category.enum";

export const ProductGallery = ({ products }: { products: ProductType[] }) => {
  const { activeCategory } = useProductCategory();

  const filteredProducts = useMemo(() => {
    return activeCategory === ProductCategory.all
      ? products
      : products.filter(
          (product) =>
            product.category.toLowerCase() === activeCategory.toLowerCase(),
        );
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
