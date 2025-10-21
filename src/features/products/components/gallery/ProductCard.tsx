import { Card } from "@/components/ui/card";
import { env } from "@/config/env";

type ProductCardProps = {
  category: string;
  image: string;
};

export const ProductCard = ({ image, category }: ProductCardProps) => {
  return (
    <Card className="relative overflow-hidden">
      <div className="aspect-[4/3] w-full">
        <img
          src={`${env.API_BASE_URL}${image}`}
          alt="Produk ecoprint"
          className="h-full w-full object-cover"
        />
      </div>

      <span
        className="absolute top-2 inline-flex items-center rounded px-2 py-1 text-xs font-medium bg-primary text-primary-foreground shadow-sm b right-2"
        aria-label={`Kategori ${category}`}
      >
        {category}
      </span>
    </Card>
  );
};
