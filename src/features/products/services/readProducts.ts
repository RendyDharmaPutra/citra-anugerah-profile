import { apiBaseInstance } from "@/lib/axios";
import type { ProductType } from "@/types/models/product-type";
import { env } from "@/config/env";

type ReadProductsServiceResponse = {
  data: ProductType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export const readProductsService = async () => {
  const result = await apiBaseInstance.get<ReadProductsServiceResponse>(
    "/products",
    {
      headers: {
        Authorization: `Bearer ${env.STRAPI_TOKEN}`,
      },
      params: {
        populate: "image",
      },
    },
  );

  const data = result.data.data;

  return data;
};
