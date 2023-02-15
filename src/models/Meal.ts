export interface Meal {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  status: "inTheDiet" | "offDiet";
}
