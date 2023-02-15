import { Diet } from "./Diet";
export interface Meal {
  id: number;
  name: string;
  description: string;
  date: string;
  status: Diet;
}
