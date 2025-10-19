import { ProductCategoryProvider } from "../context/ProductCategoryContext";
import { ProductFilterAction } from "./filter/FilterAction";

export const ProductContentSection = () => {
  return (
    <ProductCategoryProvider>
      <div className="space-y-6">
        <ProductFilterAction />
      </div>
    </ProductCategoryProvider>
  );
};
