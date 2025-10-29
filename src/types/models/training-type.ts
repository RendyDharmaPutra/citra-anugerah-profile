export type TrainingType = {
  id: number;
  documentId: string;
  title: string;
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
