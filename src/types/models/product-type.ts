export type ProductType = {
  id: number;
  documentId: string;
  category: string;
  createdAt: string;
  updatedAt: string;
  image: {
    formats: {
      medium: {
        url: string;
      };
    };
  };
};
