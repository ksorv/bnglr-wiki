export interface Place {
  id: string;
  name: string;
  image: string;
  approved: boolean;
  tags: string;
  link: string;
  rating: number;
  description: string;
  summary: string;
};

export type Record = [string, Array<Place>];