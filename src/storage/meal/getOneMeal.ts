import { getAllMeals } from "@storage/meal/getAllMeals";

export async function getOneMeal(id: string) {
  try {
    const storage = await getAllMeals();
    const meal = storage.find((meal) => meal.id === id);
    return meal;
  } catch (error) {
    throw error;
  }
}
