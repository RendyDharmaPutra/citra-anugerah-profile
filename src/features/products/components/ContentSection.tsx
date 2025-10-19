import { ProductCategoryProvider } from "../context/ProductCategoryContext";
import { ProductFilterAction } from "./filter/FilterAction";
import { ProductGallery } from "./gallery/Gallery";
import type { ProductType } from "@/types/models/product-type";

export const ProductContentSection = ({
  products,
}: {
  products: ProductType[];
}) => {
  return (
    <ProductCategoryProvider>
      <div className="space-y-6">
        <ProductFilterAction />
        <ProductGallery products={products} />
      </div>
    </ProductCategoryProvider>
  );
};
