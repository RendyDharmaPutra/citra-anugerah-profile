import { ProductFilterBtn } from "./FilterBtn";
import { useProductCategory } from "../../context/ProductCategoryContext";
import { PRODUCT_CATEGORIES } from "@/constants/products-categories.constant";

export const ProductFilterAction = () => {
  const { activeCategory, setActiveCategory } = useProductCategory();

  return (
    <section
      className="flex flex-wrap items-center gap-2"
      role="toolbar"
      aria-label="Filter kategori produk"
    >
      {PRODUCT_CATEGORIES.map((cat) => (
        <ProductFilterBtn
          key={cat}
          label={cat}
          isSelected={activeCategory === cat}
          onClick={() => setActiveCategory(cat)}
        />
      ))}
    </section>
  );
};
