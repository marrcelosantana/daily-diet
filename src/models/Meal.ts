import { Diet } from "./Diet";
export interface Meal {
  id: string;
  name: string;
  description: string;
  date: string;
  status: Diet;
}
