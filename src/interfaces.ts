import { TwMainColor } from "data/types"

export interface FetchedCategories {
  data: FetchedCategory[]
}

export interface Article {
  title: string
  preview: string
  main_img: any
  content: string
  slug: string
  createdAt: string
  publishedAt: string
  updatedAt: string
  categories: FetchedCategories
  timer: number
}

export interface FetchedArticle {
  id: number,
  attributes: Article
}

export type FetchedCategory = {
  id: number,
  attributes: Category
}

export type Category = {
  name: string,
  color: TwMainColor
}