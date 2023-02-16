import { Meal } from "@models/Meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function updateMeal(id: string, updatedMeal: Meal) {
  try {
    const storage = await getAllMeals();

    const meal = storage.find((item) => item.id === id);

    if (meal) {
      meal.name = updatedMeal.name;
      meal.description = updatedMeal.description;
      meal.status = updatedMeal.status;
      meal.date = updatedMeal.date;
    }

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
