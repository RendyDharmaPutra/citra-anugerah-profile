import { apiBaseInstance } from "@/lib/axios";
import { env } from "@/config/env";
import type { TrainingType } from "@/types/models/training-type";

type ReadTrainingsServiceResponse = {
  data: TrainingType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export const readTrainingsService = async () => {
  const result = await apiBaseInstance.get<ReadTrainingsServiceResponse>(
    "/trainings",
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
