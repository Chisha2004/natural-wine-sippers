import { BeverageCategory } from './beverage-category.interface';

//TODO confirm if origin and country are the same thing
export interface Beverage {
  id: string;
  name: string;
  category: BeverageCategory;
  description: string;
  type?: string;
  grapeVariety?: string;
  country: string;
  region?: string;
  vintage: string;
  degree: string;
  capacity: number;
  origin?: string;
  producer: string;
  style?: string;
  rating?: number;
  year: string;
  price: string;
  imgUrl: string;
}
