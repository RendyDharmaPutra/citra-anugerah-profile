import { apiBaseInstance } from "@/lib/axios";
import type { ProductType } from "@/types/models/product-type";

type ReadProductByCategoryServiceResponse = {
  data: {
    category: string;
    product: ProductType;
  }[];
  meta: {
    total: number;
  };
};

export const readProductByCategoryService = async () => {
  const result =
    await apiBaseInstance.get<ReadProductByCategoryServiceResponse>(
      "/products/featured-by-category#",
    );

  const data = result.data.data;

  return data;
};
