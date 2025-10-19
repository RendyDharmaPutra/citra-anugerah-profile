import { ProductCard } from "./ProductCard";
import type { ProductType } from "@/types/models/product-type";

export const ProductGallery = ({ products }: { products: ProductType[] }) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image.formats.medium.url}
          category={product.category}
        />
      ))}
    </section>
  );
};
