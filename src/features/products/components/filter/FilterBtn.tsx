import type { ProductCategory } from "@/constants/enum/product-category.enum";

type FilterBtnProps = {
  label: ProductCategory; // ? Changed to enum type from category project
  isSelected: boolean;
  onClick: () => void;
};

export const ProductFilterBtn = ({
  label,
  isSelected,
  onClick,
}: FilterBtnProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className={`rounded-md border px-3 py-1.5 text-sm transition
            ${isSelected ? "bg-primary text-primary-foreground " : "bg-background text-foreground border-border hover:bg-muted"} cursor-pointer`}
    >
      {label}
    </button>
  );
};
