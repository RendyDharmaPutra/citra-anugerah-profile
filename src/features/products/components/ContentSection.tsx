import { ProductCategoryProvider } from "../context/ProductCategoryContext";
import { ProductFilterAction } from "./filter/FilterAction";
import { ProductGallery } from "./gallery/Gallery";

export const ProductContentSection = () => {
  return (
    <ProductCategoryProvider>
      <div className="space-y-6">
        <ProductFilterAction />
        <ProductGallery />
      </div>
    </ProductCategoryProvider>
  );
};
