import { Tauthor } from "./Tauthor";

export type Ttweet = {
  author: Tauthor;
  body: string;
  title: string;
  description: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
  tagList: string[];
  favoritesCount: number;
  favorited: boolean;
};
